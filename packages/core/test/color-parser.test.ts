/* eslint-disable sonarjs/no-duplicate-string */
import { afterEach, describe, expect, test, vi } from "vitest";
import {
    blend,
    getLuminance,
    interpolateColors,
    parseToRgba,
    withAlpha,
} from "../src/internal/data-grid/color-parser.js";

describe("interpolateColors", () => {
    test("Smoke test", () => {
        expect(interpolateColors("rgba(0, 0, 0, 1)", "rgba(255, 255, 255, 1)", 0.5)).toEqual("rgba(127, 127, 127, 1)");
    });

    test("Fully transparent inputs do not produce NaN (alpha 0)", () => {
        expect(interpolateColors("rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", 0.5)).toEqual("rgba(0, 0, 0, 0)");
    });

    test("Pre-multiplied alpha behavior with one side transparent", () => {
        // Left transparent, right opaque white
        expect(interpolateColors("rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 1)", 0.5)).toEqual(
            "rgba(255, 255, 255, 0.5)"
        );
        // Right transparent, left opaque white (symmetry check)
        expect(interpolateColors("rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 0)", 0.5)).toEqual(
            "rgba(255, 255, 255, 0.5)"
        );
    });

    test("Clamp outside range: val <= 0 returns left, val >= 1 returns right", () => {
        expect(interpolateColors("rgba(10, 20, 30, 1)", "rgba(200, 210, 220, 1)", -0.25)).toEqual(
            "rgba(10, 20, 30, 1)"
        );
        expect(interpolateColors("rgba(10, 20, 30, 1)", "rgba(200, 210, 220, 1)", 1.25)).toEqual(
            "rgba(200, 210, 220, 1)"
        );
    });
});

describe("parseToRgba", () => {
    test("Smoke test", () => {
        expect(parseToRgba("rgba(255, 255, 255, 1)")).toEqual([255, 255, 255, 1]);
    });

    test("Hex colors resolve through the DOM path", () => {
        expect(parseToRgba("#ff0000")).toEqual([255, 0, 0, 1]);
        expect(parseToRgba("#4F5DFF")).toEqual([79, 93, 255, 1]);
    });
});

// Expected channel values captured from Chromium 146 canvas pixel readback of
// the same color strings. The conversion matches the browser byte for byte on
// these cases, including the far out of gamut saturated blue.
describe("parseToRgba oklch", () => {
    const groundTruth: [string, [number, number, number, number]][] = [
        ["oklch(0.7 0.15 150)", [76, 184, 106, 1]],
        ["oklch(0.627955 0.257683 29.2339)", [255, 0, 0, 1]],
        ["oklch(1 0 0)", [255, 255, 255, 1]],
        ["oklch(0 0 0)", [0, 0, 0, 1]],
        ["oklch(0.5 0.2 262)", [25, 87, 210, 1]],
        ["oklch(0.85 0.06 80)", [227, 202, 162, 1]],
        ["oklch(0.45 0.31 264)", [0, 5, 253, 1]],
    ];

    test.each(groundTruth)("Matches browser rendering for %s", (color, expected) => {
        expect(parseToRgba(color)).toEqual(expected);
    });

    test("Alpha via slash syntax", () => {
        expect(parseToRgba("oklch(0.7 0.15 150 / 0.5)")).toEqual([76, 184, 106, 0.5]);
    });

    test("Percentage lightness, chroma, and alpha", () => {
        expect(parseToRgba("oklch(70% 37.5% 150 / 50%)")).toEqual([76, 184, 106, 0.5]);
    });

    test("Explicit deg hue unit and mixed case", () => {
        expect(parseToRgba("OKLCH(0.7 0.15 150deg)")).toEqual([76, 184, 106, 1]);
        expect(parseToRgba("  oklch( 0.7   0.15  150 )  ")).toEqual([76, 184, 106, 1]);
    });

    test("Invalid oklch returns opaque black like other invalid colors", () => {
        expect(parseToRgba("oklch(banana)")).toEqual([0, 0, 0, 1]);
    });

    // Expected values captured from Chrome 157 canvas pixel readback.
    test.each<[string, [number, number, number, number]]>([
        ["oklch(0.7 0.15 none)", [231, 114, 155, 1]],
        ["oklch(none 0 0)", [0, 0, 0, 1]],
        ["oklch(0.7 none 150)", [158, 158, 158, 1]],
        ["oklch(0.7 -0.1 150)", [158, 158, 158, 1]],
        ["oklch(1.5 0.1 30)", [255, 230, 215, 1]],
        ["oklch(150% 0.1 30)", [255, 230, 215, 1]],
    ])("Matches browser rendering for %s", (color, expected) => {
        expect(parseToRgba(color)).toEqual(expected);
    });

    test("none alpha is fully transparent", () => {
        expect(parseToRgba("oklch(0.7 0.15 150 / none)")).toEqual([76, 184, 106, 0]);
    });

    test.each(["oklch(0.7.5 0.1 30)", "oklch(1-2 0.1 30)", "oklch(0.7 0.1 30e)"])(
        "Numbers CSS rejects return opaque black for %s",
        color => {
            expect(parseToRgba(color)).toEqual([0, 0, 0, 1]);
        }
    );
});

// jsdom does not serialize modern colors the way browsers do, so these tests
// supply the computed value. Expected pixels were captured from Chrome 157.
describe("parseToRgba browser-resolved colors", () => {
    const pixel = vi.fn();
    const context = { clearRect: vi.fn(), fillRect: vi.fn(), fillStyle: "", getImageData: pixel };

    function resolveTo(computed: string) {
        const computedStyle = vi.fn(() => ({ color: computed }));
        vi.stubGlobal("getComputedStyle", computedStyle);
        vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
            context as unknown as CanvasRenderingContext2D
        );
        return computedStyle;
    }

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    test("oklch from a CSS variable", () => {
        resolveTo("oklch(0.7 0.15 150)");
        expect(parseToRgba("var(--oklch-plain)")).toEqual([76, 184, 106, 1]);
    });

    test("none in the computed form, as color-mix in oklch produces", () => {
        resolveTo("oklch(0.5 0 none)");
        expect(parseToRgba("color-mix(in oklch, white, black)")).toEqual([99, 99, 99, 1]);
    });

    test("Hue that overflows to Infinity uses the browser's value", () => {
        resolveTo("oklch(0.7 0.15 0)");
        // jsdom's CSS parser throws on this value, and browsers accept it.
        vi.spyOn(CSSStyleDeclaration.prototype, "color", "set").mockImplementation(() => undefined);
        expect(parseToRgba("oklch(0.7 0.15 1e999)")).toEqual([231, 114, 155, 1]);
    });

    test("Other color forms read the canvas pixel and are cached", () => {
        const computedStyle = resolveTo("color(srgb 0.5 0 0.5)");
        pixel.mockReturnValue({ data: new Uint8ClampedArray([128, 0, 128, 255]) });

        expect(parseToRgba("color-mix(in srgb, red, blue)")).toEqual([128, 0, 128, 1]);
        expect(context.fillStyle).toEqual("color(srgb 0.5 0 0.5)");

        const reads = computedStyle.mock.calls.length;
        expect(parseToRgba("color-mix(in srgb, red, blue)")).toEqual([128, 0, 128, 1]);
        expect(computedStyle.mock.calls.length).toEqual(reads);
    });

    test("Canvas alpha is scaled to 0..1", () => {
        resolveTo("lab(50 40 59 / 0.2)");
        pixel.mockReturnValue({ data: new Uint8ClampedArray([191, 87, 2, 51]) });
        expect(parseToRgba("lab(50 40 59 / 0.2)")).toEqual([191, 87, 2, 0.2]);
    });

    test("Unreadable legacy output warns with the color the caller passed", () => {
        resolveTo("rgb(a, b, c)");
        const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
        expect(parseToRgba("var(--broken-token)")).toEqual([0, 0, 0, 1]);
        expect(warn).toHaveBeenCalledWith("Could not parse color", "var(--broken-token)");
    });
});

describe("oklch through the drawing helpers", () => {
    test("withAlpha", () => {
        expect(withAlpha("oklch(0.7 0.15 150)", 0.3)).toEqual("rgba(76, 184, 106, 0.3)");
    });

    // Chromium composites the same two fills to rgb(165, 219, 180).
    test("blend semi-transparent oklch over white", () => {
        expect(blend("oklch(0.7 0.15 150 / 0.5)", "#ffffff")).toEqual("rgba(165.5, 219.5, 180.5, 1)");
    });

    // Chromium composites the same two fills to rgb(54, 115, 88).
    test("blend semi-transparent oklch over an oklch background", () => {
        expect(blend("oklch(0.7 0.15 150 / 0.5)", "oklch(0.3 0.05 262)")).toEqual("rgba(54, 115, 88.5, 1)");
    });

    test("blend composites translucent oklch with none", () => {
        expect(blend("oklch(0.7 0.15 none / 0.5)", "#ffffff")).toEqual("rgba(243, 184.5, 205, 1)");
    });

    test("blend returns opaque oklch colors unchanged", () => {
        expect(blend("oklch(0.7 0.15 150)", "#ffffff")).toEqual("oklch(0.7 0.15 150)");
    });

    test("interpolateColors between oklch endpoints", () => {
        const left = "oklch(0.7 0.15 150)";
        const right = "oklch(0.627955 0.257683 29.2339)";
        expect(interpolateColors(left, right, 0)).toEqual(left);
        expect(interpolateColors(left, right, 1)).toEqual(right);
        expect(interpolateColors(left, right, 0.5)).toEqual("rgba(165, 92, 53, 1)");
    });

    test("getLuminance on oklch extremes", () => {
        expect(getLuminance("oklch(1 0 0)")).toEqual(1);
        expect(getLuminance("oklch(0 0 0)")).toEqual(0);
    });
});

describe("withAlpha", () => {
    test("Smoke test", () => {
        expect(withAlpha("rgba(255, 255, 255, 1)", 0.3)).toEqual("rgba(255, 255, 255, 0.3)");
    });
});

describe("blend", () => {
    test("Smoke test", () => {
        expect(blend("rgba(255, 255, 255, 0.2)", "rgba(123, 123, 123, 1)")).toEqual("rgba(149.4, 149.4, 149.4, 1)");
    });
});

describe("getLuminance", () => {
    test("Smoke test", () => {
        expect(getLuminance("rgba(255, 255, 255, 1)")).toEqual(1);
    });

    test("Transparent has zero luminance", () => {
        expect(getLuminance("rgba(0, 0, 0, 0)")).toEqual(0);
        expect(getLuminance("transparent")).toEqual(0);
    });
});

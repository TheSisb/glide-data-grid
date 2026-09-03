/* eslint-disable sonarjs/no-duplicate-string */
import { describe, expect, test } from "vitest";
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

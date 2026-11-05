// Shamelessly stolen from https://github.com/ricokahler/color2k
// We don't need all the color functions but we deeply appreciate their work.

type Rgba = [number, number, number, number];

const cache: { [color: string]: Rgba } = {};

let div: HTMLDivElement | null = null;

function createDiv() {
    const d = document.createElement("div");
    d.style.opacity = "0";
    d.style.pointerEvents = "none";
    d.style.position = "fixed";
    // div must be mounted for `getComputedStyle` to work
    document.body.append(d);
    return d;
}

function warnUnparsable(color: string): void {
    if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn("Could not parse color", color);
    }
}

// CSS Color 4 keeps oklch() in its functional form when styles are computed,
// so the legacy rgb() split cannot read it. This parses the plain literal
// grammar: CSS numbers or percentages, the none keyword, an optional deg unit,
// an optional / alpha. Other forms, such as calc() or other hue units, resolve
// through the browser, which serializes them back into this plain form.
const cssNumber = String.raw`[+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?`;
const oklchComponent = `none|${cssNumber}%?`;
const oklchRegex = new RegExp(
    String.raw`^oklch\(\s*(${oklchComponent})\s+(${oklchComponent})\s+(none|${cssNumber}(?:deg)?)\s*(?:/\s*(${oklchComponent})\s*)?\)$`
);

function parseOklchComponent(raw: string, percentScale: number): number {
    if (raw === "none") return 0;
    if (raw.endsWith("%")) return (Number.parseFloat(raw) / 100) * percentScale;
    return Number.parseFloat(raw);
}

function parseOklch(color: string): Rgba | undefined {
    const match = oklchRegex.exec(color);
    if (match === null) return undefined;

    // CSS clamps lightness to 0..1 and chroma to 0 or more when it parses a color.
    const lightness = Math.min(1, Math.max(0, parseOklchComponent(match[1], 1)));
    const chroma = Math.max(0, parseOklchComponent(match[2], 0.4));
    const hue = parseOklchComponent(match[3], 1);
    const alpha = match[4] === undefined ? 1 : parseOklchComponent(match[4], 1);
    // Very large exponents overflow to Infinity. The browser path resolves these.
    if (!Number.isFinite(chroma) || !Number.isFinite(hue)) return undefined;

    // oklch is the polar form of oklab.
    const hueRadians = (hue * Math.PI) / 180;
    const labA = chroma * Math.cos(hueRadians);
    const labB = chroma * Math.sin(hueRadians);

    // The two matrices below are the definition of the Oklab color space
    // (Björn Ottosson, 2020, https://bottosson.github.io/posts/oklab/), and
    // CSS Color 4 reproduces them in its sample conversion code. They are not
    // derived from anything simpler. color-parser.test.ts checks the results
    // byte for byte against Chromium's own rendering.

    // Oklab → LMS cone responses. The matrix gives the cube root of each.
    const l = (lightness + 0.396_337_777_4 * labA + 0.215_803_757_3 * labB) ** 3;
    const m = (lightness - 0.105_561_345_8 * labA - 0.063_854_172_8 * labB) ** 3;
    const s = (lightness - 0.089_484_177_5 * labA - 1.291_485_548 * labB) ** 3;

    // Linear → gamma encoded sRGB, then to a byte. Out of gamut channels are
    // clamped one at a time. color-parser.test.ts pins this against Chromium's
    // canvas, including a far out of gamut blue.
    const toSrgbByte = (linear: number): number => {
        const srgb = linear <= 0.003_130_8 ? 12.92 * linear : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055;
        return Math.round(Math.min(255, Math.max(0, srgb * 255)));
    };

    // LMS → linear sRGB.
    return [
        toSrgbByte(4.076_741_662_1 * l - 3.307_711_591_3 * m + 0.230_969_929_2 * s),
        toSrgbByte(-1.268_438_004_6 * l + 2.609_757_401_1 * m - 0.341_319_396_5 * s),
        toSrgbByte(-0.004_196_086_3 * l - 0.703_418_614_7 * m + 1.707_614_701 * s),
        Math.min(1, Math.max(0, alpha)),
    ];
}

// Legacy colors (hex, named, rgb, hsl) compute to "rgb(r, g, b)" or
// "rgba(r, g, b, a)".
function parseLegacyRgb(serialized: string, color: string): Rgba {
    const [r, g, b, a = 1] = serialized
        .replace(/[^\d,.]/g, "")
        .split(",")
        .map(Number.parseFloat);
    const orZero = (channel: number): number => {
        if (!Number.isNaN(channel)) return channel;
        warnUnparsable(color);
        return 0;
    };
    return [orZero(r), orZero(g), orZero(b), orZero(a)];
}

let readbackContext: CanvasRenderingContext2D | null | undefined;

// Paints any other valid color (lab(), oklab(), color(), ...) and reads the pixel
// back. Canvas pixels are stored premultiplied, so channels lose precision at low
// alpha. The legacy and oklch paths above do not have this loss.
function readCanvasPixel(serialized: string, color: string): Rgba {
    if (readbackContext === undefined) {
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        readbackContext = canvas.getContext("2d", { willReadFrequently: true });
    }
    if (readbackContext === null) {
        warnUnparsable(color);
        return [0, 0, 0, 1];
    }

    readbackContext.clearRect(0, 0, 1, 1);
    readbackContext.fillStyle = serialized;
    readbackContext.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = readbackContext.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
}

// Resolves any other color form through the browser and reads back its
// computed serialization. Returns undefined only for an invalid color.
function parseWithBrowser(color: string): Rgba | undefined {
    div = div || createDiv();

    div.style.color = "#000";
    div.style.color = color;
    const control = getComputedStyle(div).color;

    div.style.color = "#fff";
    div.style.color = color;
    const computedColor = getComputedStyle(div).color;

    // An invalid color leaves each sentinel in place, so the two reads differ.
    if (computedColor !== control) return undefined;

    const serialized = computedColor.toLowerCase();
    if (serialized.startsWith("rgb")) return parseLegacyRgb(serialized, color);

    return parseOklch(serialized) ?? readCanvasPixel(serialized, color);
}

/** @category Drawing */
export function parseToRgba(color: string): readonly [number, number, number, number] {
    const normalizedColor = color.toLowerCase().trim();
    const cached = cache[normalizedColor];
    if (cached !== undefined) return cached;

    const parsed = parseOklch(normalizedColor) ?? parseWithBrowser(normalizedColor);
    if (parsed === undefined) return [0, 0, 0, 1];

    cache[normalizedColor] = parsed;
    return parsed;
}

/** @category Drawing */
export function withAlpha(color: string, alpha: number): string {
    const [r, g, b] = parseToRgba(color);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const blendResultCache = new Map<string, string>();

export function blendCache(color: string, background: string | undefined): string {
    const cacheKey = `${color}-${background}`;

    const maybe = blendResultCache.get(cacheKey);
    if (maybe !== undefined) return maybe;

    const result = blend(color, background);
    blendResultCache.set(cacheKey, result);
    return result;
}

/** @category Drawing */
export function blend(color: string, background: string | undefined): string {
    if (background === undefined) return color;
    const [r, g, b, a] = parseToRgba(color);
    if (a === 1) return color;
    const [br, bg, bb, ba] = parseToRgba(background);
    const ao = a + ba * (1 - a);
    // (xaA + xaB·(1−aA))/aR
    const ro = (a * r + ba * br * (1 - a)) / ao;
    const go = (a * g + ba * bg * (1 - a)) / ao;
    const bo = (a * b + ba * bb * (1 - a)) / ao;
    return `rgba(${ro}, ${go}, ${bo}, ${ao})`;
}

/** @category Drawing */
export function interpolateColors(leftColor: string, rightColor: string, val: number): string {
    // toot toot im a GPU
    if (val <= 0) return leftColor;
    if (val >= 1) return rightColor;

    // Parse to rgba returns straight alpha colors, for interpolation we want pre-multiplied alpha
    const [lr, lg, lb, la] = parseToRgba(leftColor);
    const [rr, rg, rb, ra] = parseToRgba(rightColor);

    const leftR = lr * la;
    const leftG = lg * la;
    const leftB = lb * la;

    const rightR = rr * ra;
    const rightG = rg * ra;
    const rightB = rb * ra;

    const hScaler = val;
    const nScaler = 1 - val;

    const a = la * nScaler + ra * hScaler;
    // If both colors are fully transparent the resulting alpha can be 0, avoid dividing by 0
    if (a === 0) return "rgba(0, 0, 0, 0)";
    // now we need to divide the alpha back out to get linear alpha back for the final result
    const r = Math.floor((leftR * nScaler + rightR * hScaler) / a);
    const g = Math.floor((leftG * nScaler + rightG * hScaler) / a);
    const b = Math.floor((leftB * nScaler + rightB * hScaler) / a);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @category Drawing
 */
export function getLuminance(color: string): number {
    if (color === "transparent") return 0;

    // eslint-disable-next-line unicorn/consistent-function-scoping
    function f(x: number) {
        const channel = x / 255;
        return channel <= 0.040_45 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
    }

    const [r, g, b] = parseToRgba(color);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

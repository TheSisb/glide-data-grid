"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawEditHoverIndicator = void 0;
const data_grid_lib_js_1 = require("./data-grid-lib.js");
const color_parser_js_1 = require("../color-parser.js");
function drawEditHoverIndicator(ctx, theme, effectTheme, displayData, rect, hoverAmount, overrideCursor) {
    ctx.textBaseline = "alphabetic";
    const effectRect = getHoverEffectRect(ctx, rect, displayData, theme, effectTheme?.fullSize ?? false);
    ctx.beginPath();
    (0, data_grid_lib_js_1.roundedRect)(ctx, effectRect.x, effectRect.y, effectRect.width, effectRect.height, theme.roundingRadius ?? 4);
    ctx.globalAlpha = hoverAmount;
    ctx.fillStyle = effectTheme?.bgColor ?? (0, color_parser_js_1.withAlpha)(theme.textDark, 0.1);
    ctx.fill();
    // restore
    ctx.globalAlpha = 1;
    ctx.fillStyle = theme.textDark;
    ctx.textBaseline = "middle";
    overrideCursor?.("text");
}
exports.drawEditHoverIndicator = drawEditHoverIndicator;
function getHoverEffectRect(ctx, cellRect, displayData, theme, fullSize) {
    const padX = theme.cellHorizontalPadding;
    const padY = theme.cellVerticalPadding;
    if (fullSize) {
        return {
            x: cellRect.x + padX / 2,
            y: cellRect.y + padY / 2 + 1,
            width: cellRect.width - padX,
            height: cellRect.height - padY - 1,
        };
    }
    const m = (0, data_grid_lib_js_1.measureTextCached)(displayData, ctx, theme.baseFontFull, "alphabetic");
    const maxH = cellRect.height - padY;
    const h = Math.min(maxH, m.actualBoundingBoxAscent * 2.5);
    return {
        x: cellRect.x + padX / 2,
        y: cellRect.y + (cellRect.height - h) / 2 + 1,
        width: m.width + padX * 3,
        height: h - 1,
    };
}
//# sourceMappingURL=draw-edit-hover-indicator.js.map
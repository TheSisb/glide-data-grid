"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColumnSizer = exports.measureColumn = void 0;
const React = __importStar(require("react"));
const data_grid_lib_js_1 = require("../internal/data-grid/render/data-grid-lib.js");
const data_grid_types_js_1 = require("../internal/data-grid/data-grid-types.js");
const defaultSize = 150;
// 15x more than the default size (of 10)
const DEFAULT_COMPUTE_ROWS = 150;
function measureCell(ctx, cell, theme, getCellRenderer) {
    const r = getCellRenderer(cell);
    return r?.measure?.(ctx, cell, theme) ?? defaultSize;
}
function measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, getCellRenderer) {
    let max = 0;
    // Check rows width
    for (const row of selectedData) {
        max = Math.max(max, measureCell(ctx, row[colIndex], theme, getCellRenderer));
    }
    // Check title width - using enhanced measureTextCached for cross-browser accuracy
    const titleWidth = (0, data_grid_lib_js_1.measureTextCached)(c?.title ?? "#", ctx, theme.headerFontFull).width +
        theme.cellHorizontalPadding * 2 +
        (c?.icon === undefined ? 0 : 28);
    max = Math.max(max, titleWidth);
    return {
        ...c,
        width: Math.max(Math.ceil(minColumnWidth), Math.min(Math.floor(maxColumnWidth), Math.ceil(max))),
    };
}
exports.measureColumn = measureColumn;
/** @category Hooks */
function useColumnSizer(columns, rows, getCellsForSelection, clientWidth, minColumnWidth, maxColumnWidth, theme, getCellRenderer, abortController) {
    const rowsRef = React.useRef(rows);
    const getCellsForSelectionRef = React.useRef(getCellsForSelection);
    const themeRef = React.useRef(theme);
    rowsRef.current = rows;
    getCellsForSelectionRef.current = getCellsForSelection;
    themeRef.current = theme;
    const [canvas, ctx] = React.useMemo(() => {
        if (typeof window === "undefined")
            return [null, null];
        const offscreen = document.createElement("canvas");
        offscreen.style["display"] = "none";
        offscreen.style["opacity"] = "0";
        offscreen.style["position"] = "fixed";
        return [offscreen, offscreen.getContext("2d", { alpha: false })];
    }, []);
    React.useLayoutEffect(() => {
        if (canvas)
            document.documentElement.append(canvas);
        return () => {
            canvas?.remove();
        };
    }, [canvas]);
    const memoMap = React.useRef({});
    const lastColumns = React.useRef();
    const [selectedData, setSelectionData] = React.useState();
    React.useLayoutEffect(() => {
        const getCells = getCellsForSelectionRef.current;
        if (getCells === undefined || columns.every(data_grid_types_js_1.isSizedGridColumn))
            return;
        let computeRows = Math.max(1, DEFAULT_COMPUTE_ROWS - Math.floor(columns.length / 10));
        let tailRows = 0;
        if (computeRows < rowsRef.current && computeRows > 1) {
            computeRows--;
            tailRows = 1;
        }
        const computeArea = {
            x: 0,
            y: 0,
            width: columns.length,
            height: Math.min(rowsRef.current, computeRows),
        };
        const tailComputeArea = {
            x: 0,
            y: rowsRef.current - 1,
            width: columns.length,
            height: 1,
        };
        const fn = async () => {
            const getResult = getCells(computeArea, abortController.signal);
            const tailGetResult = tailRows > 0 ? getCells(tailComputeArea, abortController.signal) : undefined;
            let toSet;
            // eslint-disable-next-line unicorn/prefer-ternary
            if (typeof getResult === "object") {
                toSet = getResult;
            }
            else {
                toSet = await (0, data_grid_types_js_1.resolveCellsThunk)(getResult);
            }
            if (tailGetResult !== undefined) {
                // eslint-disable-next-line unicorn/prefer-ternary
                if (typeof tailGetResult === "object") {
                    toSet = [...toSet, ...tailGetResult];
                }
                else {
                    toSet = [...toSet, ...(await (0, data_grid_types_js_1.resolveCellsThunk)(tailGetResult))];
                }
            }
            lastColumns.current = columns;
            setSelectionData(toSet);
        };
        void fn();
    }, [abortController.signal, columns]);
    return React.useMemo(() => {
        const getRaw = () => {
            if (columns.every(data_grid_types_js_1.isSizedGridColumn)) {
                return columns;
            }
            if (ctx === null) {
                return columns.map(c => {
                    if ((0, data_grid_types_js_1.isSizedGridColumn)(c))
                        return c;
                    return {
                        ...c,
                        width: defaultSize,
                    };
                });
            }
            ctx.font = themeRef.current.baseFontFull;
            return columns.map((c, colIndex) => {
                if ((0, data_grid_types_js_1.isSizedGridColumn)(c))
                    return c;
                if (memoMap.current[c.id] !== undefined) {
                    return {
                        ...c,
                        width: memoMap.current[c.id],
                    };
                }
                if (selectedData === undefined || lastColumns.current !== columns || c.id === undefined) {
                    return {
                        ...c,
                        width: defaultSize,
                    };
                }
                const r = measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, getCellRenderer);
                memoMap.current[c.id] = r.width;
                return r;
            });
        };
        let result = getRaw();
        let totalWidth = 0;
        let totalGrow = 0;
        const distribute = [];
        for (const [i, c] of result.entries()) {
            totalWidth += c.width;
            if (c.grow !== undefined && c.grow > 0) {
                totalGrow += c.grow;
                distribute.push(i);
            }
        }
        if (totalWidth < clientWidth && distribute.length > 0) {
            const writeable = [...result];
            const extra = clientWidth - totalWidth;
            let remaining = extra;
            for (let di = 0; di < distribute.length; di++) {
                const i = distribute[di];
                const weighted = (result[i].grow ?? 0) / totalGrow;
                const toAdd = di === distribute.length - 1 ? remaining : Math.min(remaining, Math.floor(extra * weighted));
                writeable[i] = {
                    ...result[i],
                    growOffset: toAdd,
                    width: result[i].width + toAdd,
                };
                remaining -= toAdd;
            }
            result = writeable;
        }
        return {
            sizedColumns: result,
            nonGrowWidth: totalWidth,
        };
    }, [clientWidth, columns, ctx, selectedData, theme, minColumnWidth, maxColumnWidth, getCellRenderer]);
}
exports.useColumnSizer = useColumnSizer;
//# sourceMappingURL=use-column-sizer.js.map
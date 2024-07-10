import { type Rectangle, CompactSelection } from "../data-grid-types.js";
import { CellSet } from "../cell-set.js";
import { type MappedGridColumn } from "./data-grid-lib.js";
import { type FullTheme } from "../../../common/styles.js";
import { type GetRowThemeCallback } from "./data-grid-render.cells.js";
export declare function drawBlanks(ctx: CanvasRenderingContext2D, effectiveColumns: readonly MappedGridColumn[], allColumns: readonly MappedGridColumn[], width: number, height: number, totalHeaderHeight: number, translateX: number, translateY: number, cellYOffset: number, rows: number, getRowHeight: (row: number) => number, getRowTheme: GetRowThemeCallback | undefined, selectedRows: CompactSelection, disabledRows: CompactSelection, freezeTrailingRows: number, hasAppendRow: boolean, drawRegions: readonly Rectangle[], damage: CellSet | undefined, theme: FullTheme): void;
export declare function overdrawStickyBoundaries(ctx: CanvasRenderingContext2D, effectiveCols: readonly MappedGridColumn[], width: number, height: number, freezeTrailingRows: number, rows: number, verticalBorder: (col: number) => boolean, getRowHeight: (row: number) => number, theme: FullTheme): void;
export declare function drawExtraRowThemes(ctx: CanvasRenderingContext2D, effectiveCols: readonly MappedGridColumn[], cellYOffset: number, translateX: number, translateY: number, width: number, height: number, drawRegions: Rectangle[] | undefined, totalHeaderHeight: number, getRowHeight: (row: number) => number, getRowThemeOverride: GetRowThemeCallback | undefined, verticalBorder: (col: number) => boolean, freezeTrailingRows: number, rows: number, theme: FullTheme): void;
export declare function drawGridLines(ctx: CanvasRenderingContext2D, effectiveCols: readonly MappedGridColumn[], cellYOffset: number, translateX: number, translateY: number, width: number, height: number, drawRegions: Rectangle[] | undefined, spans: Rectangle[] | undefined, groupHeaderHeight: number, totalHeaderHeight: number, getRowHeight: (row: number) => number, getRowThemeOverride: GetRowThemeCallback | undefined, verticalBorder: (col: number) => boolean, freezeTrailingRows: number, rows: number, theme: FullTheme, verticalOnly?: boolean): void;

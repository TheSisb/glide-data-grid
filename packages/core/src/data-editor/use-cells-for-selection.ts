import * as React from "react";
import type { DataGridSearchProps } from "../internal/data-grid-search/data-grid-search.js";
import { type CellArray, type GridCell, GridCellKind } from "../internal/data-grid/data-grid-types.js";
import type { DataEditorProps } from "./data-editor.js";

type CellsForSelectionCallback = NonNullable<DataGridSearchProps["getCellsForSelection"]>;
// Module level so that the returned functions hold their arguments and nothing from a render.
function makeGetCellsForSelectionDirect(
    getCellsForSelectionIn: CellsForSelectionCallback | true,
    getCellContent: DataEditorProps["getCellContent"],
    rows: number,
    abortSignal: AbortSignal
): CellsForSelectionCallback {
    return rect => {
        if (getCellsForSelectionIn === true) {
            const result: GridCell[][] = [];

            for (let y = rect.y; y < rect.y + rect.height; y++) {
                const row: GridCell[] = [];
                for (let x = rect.x; x < rect.x + rect.width; x++) {
                    if (x < 0 || y >= rows) {
                        row.push({
                            kind: GridCellKind.Loading,
                            allowOverlay: false,
                        });
                    } else {
                        row.push(getCellContent([x, y]));
                    }
                }
                result.push(row);
            }

            return result;
        }
        return getCellsForSelectionIn(rect, abortSignal) ?? [];
    };
}

function makeGetCellsForSelectionMangled(
    getCellsForSelectionDirect: CellsForSelectionCallback,
    rowMarkerOffset: number,
    abortSignal: AbortSignal
): CellsForSelectionCallback {
    return rect => {
        const newRect = {
            ...rect,
            x: rect.x - rowMarkerOffset,
        };
        if (newRect.x < 0) {
            newRect.x = 0;
            newRect.width--;
            const r = getCellsForSelectionDirect(newRect, abortSignal);

            if (typeof r === "function") {
                return async () =>
                    // eslint-disable-next-line unicorn/no-await-expression-member
                    (await r()).map<CellArray[0]>(row => [{ kind: GridCellKind.Loading, allowOverlay: false }, ...row]);
            }
            return r.map(row => [{ kind: GridCellKind.Loading, allowOverlay: false }, ...row]);
        }
        return getCellsForSelectionDirect(newRect, abortSignal);
    };
}

export function useCellsForSelection(
    getCellsForSelectionIn: CellsForSelectionCallback | true | undefined,
    getCellContent: DataEditorProps["getCellContent"],
    rowMarkerOffset: number,
    abortController: AbortController,
    rows: number
) {
    const abortSignal = abortController.signal;
    const getCellsForSelectionDirect = React.useMemo(
        () =>
            getCellsForSelectionIn === undefined
                ? undefined
                : makeGetCellsForSelectionDirect(getCellsForSelectionIn, getCellContent, rows, abortSignal),
        [abortSignal, getCellContent, getCellsForSelectionIn, rows]
    );

    const getCellsForSelection = React.useMemo(
        () =>
            getCellsForSelectionDirect === undefined
                ? undefined
                : makeGetCellsForSelectionMangled(getCellsForSelectionDirect, rowMarkerOffset, abortSignal),
        [abortSignal, getCellsForSelectionDirect, rowMarkerOffset]
    );

    return [getCellsForSelection, getCellsForSelectionDirect] as const;
}

import * as React from "react";
import { GridCellKind } from "../internal/data-grid/data-grid-types.js";
// Module level so that the returned functions hold their arguments and nothing from a render.
function makeGetCellsForSelectionDirect(getCellsForSelectionIn, getCellContent, rows, abortSignal) {
    return rect => {
        if (getCellsForSelectionIn === true) {
            const result = [];
            for (let y = rect.y; y < rect.y + rect.height; y++) {
                const row = [];
                for (let x = rect.x; x < rect.x + rect.width; x++) {
                    if (x < 0 || y >= rows) {
                        row.push({
                            kind: GridCellKind.Loading,
                            allowOverlay: false,
                        });
                    }
                    else {
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
function makeGetCellsForSelectionMangled(getCellsForSelectionDirect, rowMarkerOffset, abortSignal) {
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
                (await r()).map(row => [{ kind: GridCellKind.Loading, allowOverlay: false }, ...row]);
            }
            return r.map(row => [{ kind: GridCellKind.Loading, allowOverlay: false }, ...row]);
        }
        return getCellsForSelectionDirect(newRect, abortSignal);
    };
}
export function useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortController, rows) {
    const abortSignal = abortController.signal;
    const getCellsForSelectionDirect = React.useMemo(() => getCellsForSelectionIn === undefined
        ? undefined
        : makeGetCellsForSelectionDirect(getCellsForSelectionIn, getCellContent, rows, abortSignal), [abortSignal, getCellContent, getCellsForSelectionIn, rows]);
    const getCellsForSelection = React.useMemo(() => getCellsForSelectionDirect === undefined
        ? undefined
        : makeGetCellsForSelectionMangled(getCellsForSelectionDirect, rowMarkerOffset, abortSignal), [abortSignal, getCellsForSelectionDirect, rowMarkerOffset]);
    return [getCellsForSelection, getCellsForSelectionDirect];
}
//# sourceMappingURL=use-cells-for-selection.js.map
import { CompactSelection } from "./data-grid-types.js";
import { useStableCallback } from "../../common/use-stable-callback.js";
export function useSelectionBehavior(gridSelection, setGridSelection, rangeBehavior, columnBehavior, rowBehavior, rangeSelect, rangeSelectionColumnSpanning) {
    // if append is true, the current range will be added to the rangeStack
    const setCurrent = useStableCallback((value, expand, append, trigger) => {
        if ((rangeSelect === "cell" || rangeSelect === "multi-cell") && value !== undefined) {
            value = {
                ...value,
                range: {
                    x: value.cell[0],
                    y: value.cell[1],
                    width: 1,
                    height: 1,
                },
            };
        }
        if (!rangeSelectionColumnSpanning && value !== undefined && value.range.width > 1) {
            value = {
                ...value,
                range: {
                    ...value.range,
                    width: 1,
                    x: value.cell[0],
                },
            };
        }
        const rangeMixable = (rangeBehavior === "mixed" && (append || trigger === "drag")) || rangeBehavior === "additive";
        const allowColumnCoSelect = (columnBehavior === "mixed" || columnBehavior === "additive") && rangeMixable;
        const allowRowCoSelect = (rowBehavior === "mixed" || rowBehavior === "additive") && rangeMixable;
        let newVal = {
            current: value === undefined
                ? undefined
                : {
                    ...value,
                    rangeStack: trigger === "drag" ? (gridSelection.current?.rangeStack ?? []) : [],
                },
            columns: allowColumnCoSelect ? gridSelection.columns : CompactSelection.empty(),
            rows: allowRowCoSelect ? gridSelection.rows : CompactSelection.empty(),
        };
        const addLastRange = append && (rangeSelect === "multi-rect" || rangeSelect === "multi-cell");
        if (addLastRange && newVal.current !== undefined && gridSelection.current !== undefined) {
            newVal = {
                ...newVal,
                current: {
                    ...newVal.current,
                    rangeStack: [...gridSelection.current.rangeStack, gridSelection.current.range],
                },
            };
        }
        setGridSelection(newVal, expand);
    });
    const setSelectedRows = useStableCallback((newRows, append, allowMixed) => {
        newRows = newRows ?? gridSelection.rows;
        if (append !== undefined) {
            newRows = newRows.add(append);
        }
        let newVal;
        if (rowBehavior === "exclusive" && newRows.length > 0) {
            newVal = {
                current: undefined,
                columns: CompactSelection.empty(),
                rows: newRows,
            };
        }
        else {
            const rangeMixed = (allowMixed && rangeBehavior === "mixed") || rangeBehavior === "additive";
            const columnMixed = (allowMixed && columnBehavior === "mixed") || columnBehavior === "additive";
            const current = !rangeMixed ? undefined : gridSelection.current;
            newVal = {
                current,
                columns: columnMixed ? gridSelection.columns : CompactSelection.empty(),
                rows: newRows,
            };
        }
        setGridSelection(newVal, false);
    });
    const setSelectedColumns = useStableCallback((newCols, append, allowMixed) => {
        newCols = newCols ?? gridSelection.columns;
        if (append !== undefined) {
            newCols = newCols.add(append);
        }
        let newVal;
        if (columnBehavior === "exclusive" && newCols.length > 0) {
            newVal = {
                current: undefined,
                rows: CompactSelection.empty(),
                columns: newCols,
            };
        }
        else {
            const rangeMixed = (allowMixed && rangeBehavior === "mixed") || rangeBehavior === "additive";
            const rowMixed = (allowMixed && rowBehavior === "mixed") || rowBehavior === "additive";
            const current = !rangeMixed ? undefined : gridSelection.current;
            newVal = {
                current,
                rows: rowMixed ? gridSelection.rows : CompactSelection.empty(),
                columns: newCols,
            };
        }
        setGridSelection(newVal, false);
    });
    return [setCurrent, setSelectedRows, setSelectedColumns];
}
//# sourceMappingURL=use-selection-behavior.js.map
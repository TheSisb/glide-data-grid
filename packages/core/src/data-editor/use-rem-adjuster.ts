import React from "react";
import { getDataEditorTheme, type Theme } from "../common/styles.js";

interface DataEditorDimensions {
    rowHeight: number | ((n: number) => number);
    headerHeight: number;
    groupHeaderHeight: number;
    theme: Partial<Theme> | undefined;
    overscrollX: number | undefined;
    overscrollY: number | undefined;
}

interface DataEditorProps {
    rowHeight: number | ((n: number) => number);
    headerHeight: number;
    groupHeaderHeight: number;
    theme?: Partial<Theme>;
    overscrollX?: number;
    overscrollY?: number;
    scaleToRem: boolean;
    remSize: number;
}

// Module level so that the returned function holds its arguments and nothing from a render.
function scaleRowHeight(rowHeight: (n: number) => number, scaler: number): (n: number) => number {
    return n => Math.ceil(rowHeight(n) * scaler);
}

export function useRemAdjuster({
    rowHeight: rowHeightIn,
    headerHeight: headerHeightIn,
    groupHeaderHeight: groupHeaderHeightIn,
    theme: themeIn,
    overscrollX: overscrollXIn,
    overscrollY: overscrollYIn,
    scaleToRem,
    remSize,
}: DataEditorProps): DataEditorDimensions {
    const [rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY] = React.useMemo(() => {
        if (!scaleToRem || remSize === 16)
            return [rowHeightIn, headerHeightIn, groupHeaderHeightIn, themeIn, overscrollXIn, overscrollYIn];
        const scaler = remSize / 16;
        const rh = rowHeightIn;
        const bt = getDataEditorTheme();
        return [
            typeof rh === "number" ? rh * scaler : scaleRowHeight(rh, scaler),
            Math.ceil(headerHeightIn * scaler),
            Math.ceil(groupHeaderHeightIn * scaler),
            {
                ...themeIn,
                headerIconSize: (themeIn?.headerIconSize ?? bt.headerIconSize) * scaler,
                cellHorizontalPadding: (themeIn?.cellHorizontalPadding ?? bt.cellHorizontalPadding) * scaler,
                cellVerticalPadding: (themeIn?.cellVerticalPadding ?? bt.cellVerticalPadding) * scaler,
            },
            Math.ceil((overscrollXIn ?? 0) * scaler),
            Math.ceil((overscrollYIn ?? 0) * scaler),
        ];
    }, [groupHeaderHeightIn, headerHeightIn, overscrollXIn, overscrollYIn, remSize, rowHeightIn, scaleToRem, themeIn]);

    return { rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY };
}

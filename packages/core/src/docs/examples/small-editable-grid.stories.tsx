import React from "react";
import { GridCellKind, type Item } from "../../internal/data-grid/data-grid-types.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";

export default {
    title: "Glide-Data-Grid/DataEditor Demos",

    decorators: [
        (Story: React.ComponentType) => (
            <SimpleThemeWrapper>
                <BeautifulWrapper
                    title="Editable Grid"
                    description={
                        <Description>
                            Data grid supports overlay editors for changing values. There are bespoke editors for
                            numbers, strings, images, booleans, markdown, and uri.
                        </Description>
                    }>
                    <Story />
                </BeautifulWrapper>
            </SimpleThemeWrapper>
        ),
    ],
};

export const SmallEditableGrid = () => {
    const { cols, getCellContent, setCellValue } = useMockDataGenerator(7, false);

    const _getCellContent = (cell: Item) => {
        const [col, row] = cell;

        if (col === 6) {
            return {
                kind: GridCellKind.Number,
                data: 100,
                displayData: "100",
                readonly: false,
                allowOverlay: true,
                allowNegative: true,
            };
        }
        return getCellContent(cell);
    };

    return (
        <DataEditor
            {...defaultProps}
            getCellContent={_getCellContent}
            columns={React.useMemo(() => {
                const updated = [...cols];
                if (updated.length > 6) {
                    updated[6] = { ...updated[6], title: "NUMBER", width: 250 } as any;
                }
                return updated;
            }, [cols])}
            rows={20}
            onCellEdited={setCellValue}
        />
    );
};

import * as React from "react";
import { createRoot, type Root } from "react-dom/client";
import { fireEvent, act } from "@testing-library/react";
import v8 from "node:v8";
import vm from "node:vm";
import { vi, expect, describe, test, beforeEach, afterEach } from "vitest";
import { DataEditor, type DataEditorProps, type GridCell, GridCellKind, type Item } from "../src/index.js";
import { basicProps, prep, sendClick, Context, standardBeforeEach, standardAfterEach } from "./test-utils.js";

v8.setFlagsFromString("--expose-gc");
const collectGarbage: () => void = vm.runInNewContext("gc");

const UPDATES = 12;

class ReplacedData {
    public constructor(public readonly label: string) {}
}

function cellsOf(data: ReplacedData): DataEditorProps["getCellContent"] {
    return ([col, row]: Item): GridCell => ({
        kind: GridCellKind.Text,
        allowOverlay: true,
        data: `${data.label} ${col} ${row}`,
        displayData: `${data.label} ${col} ${row}`,
    });
}

function columnsOf(version: number): DataEditorProps["columns"] {
    return basicProps.columns.map(c => ({ ...c, width: 100 + version }));
}

const rowY = (update: number) => 36 + 32 * (1 + (update % 5)) + 16;

const betweenUpdates: Record<string, (scroller: Element, canvas: Element, update: number) => void> = {
    "nothing else": () => undefined,
    "a selection change": (scroller, _canvas, update) => sendClick(scroller, { clientX: 150, clientY: rowY(update) }),
    "a hover": (_scroller, canvas, update) => fireEvent.mouseMove(canvas, { clientX: 150, clientY: rowY(update) }),
};

// Each update is new data in one render and new column widths in the next, the way a refetch followed by an
// autosize arrives. Runs in its own call so that nothing of it is left on the stack when the caller collects.
function mountAndUpdate(root: Root, interaction: string): WeakRef<ReplacedData>[] {
    const replaced: WeakRef<ReplacedData>[] = [];
    const cellsOfNewData = (version: number) => {
        const data = new ReplacedData(`v${version}`);
        replaced.push(new WeakRef(data));
        return cellsOf(data);
    };
    // Rendered through the root directly: the render helper of the testing library keeps the first element. The
    // element is created outside the act callback because development React keeps the functions that were on the
    // stack when the first element was created.
    const rerender = (getCellContent: DataEditorProps["getCellContent"], columns: DataEditorProps["columns"]) => {
        const element = (
            <Context>
                <DataEditor {...basicProps} columns={columns} getCellContent={getCellContent} />
            </Context>
        );
        act(() => root.render(element));
    };

    let getCellContent = cellsOfNewData(0);
    let columns = columnsOf(0);
    vi.useFakeTimers();
    rerender(getCellContent, columns);
    const scroller = prep();
    const canvas = document.querySelector("[data-testid='data-grid-canvas']");
    if (scroller === null || canvas === null) throw new Error("the grid did not mount");

    for (let update = 1; update <= UPDATES; update++) {
        act(() => betweenUpdates[interaction](scroller, canvas, update));
        getCellContent = cellsOfNewData(update);
        rerender(getCellContent, columns);
        columns = columnsOf(update);
        rerender(getCellContent, columns);
    }
    return replaced;
}

describe("data-editor retention", () => {
    vi.mock("../src/common/resize-detector", () => {
        return {
            useResizeDetector: () => ({ ref: undefined, width: 1000, height: 1000 }),
        };
    });

    let container: HTMLElement;
    let root: Root;

    beforeEach(() => {
        standardBeforeEach();
        container = document.body.appendChild(document.createElement("div"));
        root = createRoot(container);
    });

    afterEach(() => {
        act(() => root.unmount());
        container.remove();
        standardAfterEach();
    });

    test.each(Object.keys(betweenUpdates))(
        "releases replaced getCellContent when data and widths change in alternating renders, with %s in between",
        async interaction => {
            const replaced = mountAndUpdate(root, interaction);

            // A click focuses the grid in an animation frame. Let pending frames and timers run before collecting.
            await act(() => new Promise<void>(resolve => setTimeout(resolve, 100)));
            collectGarbage();

            // Nothing may keep the first render for the life of the editor.
            expect(replaced[0].deref()).toBeUndefined();
            // React holds the props of the current render and of the one before it.
            const kept = replaced.filter(data => data.deref() !== undefined).length;
            expect(kept).toBeLessThanOrEqual(3);
        }
    );
});

import * as React from "react";
import type { SelectionRange } from "../../data-grid/data-grid-types.js";
interface Props {
    readonly value: number | undefined;
    readonly disabled?: boolean;
    readonly onChange: (value: number | undefined) => void;
    readonly highlight: boolean;
    readonly validatedSelection?: SelectionRange;
    readonly initialValue?: string;
}
declare const NumberOverlayEditor: React.FunctionComponent<Props>;
export default NumberOverlayEditor;

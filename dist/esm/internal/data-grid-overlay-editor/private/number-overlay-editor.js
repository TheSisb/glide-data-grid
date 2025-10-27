import * as React from "react";
import { NumberOverlayEditorStyle } from "./number-overlay-editor-style.js";
import { NumericFormat } from "react-number-format";
function getDecimalSeparator() {
    const numberWithDecimalSeparator = 1.1;
    const result = Intl.NumberFormat()
        ?.formatToParts(numberWithDecimalSeparator)
        ?.find(part => part.type === "decimal")?.value;
    return result ?? ".";
}
function getThousandSeprator() {
    return getDecimalSeparator() === "." ? "," : ".";
}
const NumberOverlayEditor = p => {
    const { value, onChange, disabled, highlight, validatedSelection, fixedDecimals, allowNegative, thousandSeparator, decimalSeparator, initialValue, } = p;
    const inputRef = React.useRef();
    React.useLayoutEffect(() => {
        if (validatedSelection !== undefined) {
            const range = typeof validatedSelection === "number" ? [validatedSelection, null] : validatedSelection;
            inputRef.current?.setSelectionRange(range[0], range[1]);
        }
    }, [validatedSelection]);
    const decimalSeparatorValue = decimalSeparator ?? getDecimalSeparator();
    return (React.createElement(NumberOverlayEditorStyle, null,
        React.createElement(NumericFormat, { autoFocus: true, getInputRef: inputRef, className: "gdg-input", onFocus: (e) => e.target.setSelectionRange(highlight ? 0 : e.target.value.length, e.target.value.length), disabled: disabled === true, decimalScale: fixedDecimals, allowNegative: allowNegative, thousandSeparator: thousandSeparator ?? getThousandSeprator(), decimalSeparator: decimalSeparatorValue, value: initialValue === decimalSeparatorValue
                ? `0${decimalSeparatorValue}`
                : Object.is(value, -0)
                    ? "-"
                    : value ?? "", 
            // decimalScale={3}
            // prefix={"$"}
            onValueChange: onChange })));
};
export default NumberOverlayEditor;
//# sourceMappingURL=number-overlay-editor.js.map
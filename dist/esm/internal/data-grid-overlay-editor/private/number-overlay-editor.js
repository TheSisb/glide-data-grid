import * as React from "react";
import { NumberOverlayEditorStyle } from "./number-overlay-editor-style.js";
const NumberOverlayEditor = p => {
    const { value, onChange, disabled, highlight, validatedSelection, initialValue } = p;
    const [inputValue, setInputValue] = React.useState(() => {
        if (initialValue !== undefined)
            return initialValue;
        if (value === undefined)
            return "";
        if (Object.is(value, -0))
            return "-0";
        return String(value);
    });
    const inputRef = React.useRef(null);
    React.useEffect(() => {
        const el = inputRef.current;
        if (el === null)
            return;
        el.focus();
        if (highlight) {
            el.setSelectionRange(0, el.value.length);
        }
        else {
            el.setSelectionRange(el.value.length, el.value.length);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useLayoutEffect(() => {
        if (validatedSelection !== undefined) {
            const range = typeof validatedSelection === "number" ? [validatedSelection, null] : validatedSelection;
            inputRef.current?.setSelectionRange(range[0], range[1]);
        }
    }, [validatedSelection]);
    const handleChange = React.useCallback((e) => {
        const raw = e.target.value;
        if (raw !== "" && raw !== "-" && raw !== "." && raw !== "-." && Number.isNaN(Number(raw)))
            return;
        setInputValue(raw);
        if (raw === "") {
            onChange(undefined);
            return;
        }
        if (raw === "-" || raw === "." || raw === "-.")
            return;
        onChange(Number(raw));
    }, [onChange]);
    const handleBlur = React.useCallback(() => {
        setInputValue(prev => {
            if (prev.endsWith("."))
                return prev.slice(0, -1);
            return prev;
        });
    }, []);
    return (React.createElement(NumberOverlayEditorStyle, null,
        React.createElement("input", { ref: inputRef, className: "gdg-input", inputMode: "decimal", disabled: disabled === true, value: inputValue, onChange: handleChange, onBlur: handleBlur })));
};
export default NumberOverlayEditor;
//# sourceMappingURL=number-overlay-editor.js.map
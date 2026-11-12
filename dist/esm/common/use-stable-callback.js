import * as React from "react";
// A closure keeps the whole call that created it alive, including every other closure that call created or could
// see. A function memoized in a render body therefore keeps that render, and through it the memoized functions of
// older renders. The hooks here keep only the latest render.
// Absent before React 18. Looked up by a computed name so that bundlers do not report a missing export there.
const useInsertionEffect = React["useInsertion" + "Effect"];
function useLatestCommitted(value) {
    const latest = React.useRef(value);
    // Runs before the layout effects and ref callbacks of the same commit.
    useInsertionEffect(() => {
        latest.current = value;
    });
    return latest;
}
// React 16 and 17 never discard a render, so the ref can be written while rendering.
function useLatestRendered(value) {
    const latest = React.useRef(value);
    latest.current = value;
    return latest;
}
/**
 * Returns a ref that always holds the value of the latest render. Read it from event handlers and effects, not while
 * rendering.
 */
export const useLatest = useInsertionEffect === undefined ? useLatestRendered : useLatestCommitted;
// Module level so that the returned function holds the ref and nothing from a render.
function makeCaller(latest) {
    return (...args) => latest.current(...args);
}
/**
 * Returns a function that keeps one identity and always runs the latest `fn`.
 *
 * Do not call the result while rendering, and do not use it where a new identity must signal a change, such as a
 * function the canvas calls while drawing or a dependency of a memo or effect that must rerun.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useStableCallback(fn) {
    const latest = useLatest(fn);
    return React.useState(() => makeCaller(latest))[0];
}
//# sourceMappingURL=use-stable-callback.js.map
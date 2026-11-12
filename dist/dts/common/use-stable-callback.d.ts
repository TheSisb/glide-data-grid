import * as React from "react";
/**
 * Returns a ref that always holds the value of the latest render. Read it from event handlers and effects, not while
 * rendering.
 */
export declare const useLatest: <T>(value: T) => React.MutableRefObject<T>;
/**
 * Returns a function that keeps one identity and always runs the latest `fn`.
 *
 * Do not call the result while rendering, and do not use it where a new identity must signal a change, such as a
 * function the canvas calls while drawing or a dependency of a memo or effect that must rerun.
 */
export declare function useStableCallback<T extends (...args: any[]) => any>(fn: T): T;

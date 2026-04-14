/** Start loading overlay editor chunks; safe to call multiple times. */
export function preloadOverlayEditors() {
    void import("./data-grid-overlay-editor.js");
    void import("./private/number-overlay-editor.js");
}
//# sourceMappingURL=preload-overlay-editors.js.map
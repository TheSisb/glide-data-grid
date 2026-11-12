import * as React from "react";
import { useStateWithReactiveInput } from "../common/utils.js";
// Module level so that the facade holds the state object and nothing from a render.
function makeCallbackRefFacade(state) {
    return {
        get current() {
            return state.value;
        },
        set current(value) {
            const last = state.value;
            if (last !== value) {
                state.value = value;
                state.callback(value, last);
            }
        },
    };
}
// shamelessly stolen and modified from: https://github.com/theKashey/use-callback-ref
// MIT License https://github.com/theKashey/use-callback-ref/tree/master?tab=MIT-1-ov-file#readme
function useCallbackRef(initialValue, callback) {
    const [ref] = React.useState(() => {
        const state = { value: initialValue, callback };
        return { state, facade: makeCallbackRefFacade(state) };
    });
    ref.state.callback = callback;
    return ref.facade;
}
export function useInitialScrollOffset(scrollOffsetX, scrollOffsetY, rowHeight, visibleRegionRef, onDidScroll) {
    const [visibleRegionY, visibleRegionTy] = React.useMemo(() => {
        return [
            scrollOffsetY !== undefined && typeof rowHeight === "number" ? Math.floor(scrollOffsetY / rowHeight) : 0,
            scrollOffsetY !== undefined && typeof rowHeight === "number" ? -(scrollOffsetY % rowHeight) : 0,
        ];
    }, [scrollOffsetY, rowHeight]);
    const visibleRegionInput = React.useMemo(() => ({
        x: visibleRegionRef.current.x,
        y: visibleRegionY,
        width: visibleRegionRef.current.width ?? 1,
        height: visibleRegionRef.current.height ?? 1,
        // tx: 'TODO',
        ty: visibleRegionTy,
    }), [visibleRegionRef, visibleRegionTy, visibleRegionY]);
    const [visibleRegion, setVisibleRegion, empty] = useStateWithReactiveInput(visibleRegionInput);
    const onDidScrollRef = React.useRef(onDidScroll);
    onDidScrollRef.current = onDidScroll;
    const scrollRef = useCallbackRef(null, newVal => {
        if (newVal !== null && scrollOffsetY !== undefined) {
            newVal.scrollTop = scrollOffsetY;
        }
        else if (newVal !== null && scrollOffsetX !== undefined) {
            newVal.scrollLeft = scrollOffsetX;
        }
    });
    const vScrollReady = (visibleRegion.height ?? 1) > 1;
    React.useLayoutEffect(() => {
        if (scrollOffsetY !== undefined && scrollRef.current !== null && vScrollReady) {
            if (scrollRef.current.scrollTop === scrollOffsetY)
                return;
            scrollRef.current.scrollTop = scrollOffsetY;
            if (scrollRef.current.scrollTop !== scrollOffsetY) {
                empty();
            }
            onDidScrollRef.current();
        }
    }, [scrollOffsetY, vScrollReady, empty, scrollRef]);
    const hScrollReady = (visibleRegion.width ?? 1) > 1;
    React.useLayoutEffect(() => {
        if (scrollOffsetX !== undefined && scrollRef.current !== null && hScrollReady) {
            if (scrollRef.current.scrollLeft === scrollOffsetX)
                return;
            scrollRef.current.scrollLeft = scrollOffsetX;
            if (scrollRef.current.scrollLeft !== scrollOffsetX) {
                empty();
            }
            onDidScrollRef.current();
        }
    }, [scrollOffsetX, hScrollReady, empty, scrollRef]);
    return {
        visibleRegion,
        setVisibleRegion,
        scrollRef,
    };
}
//# sourceMappingURL=use-initial-scroll-offset.js.map
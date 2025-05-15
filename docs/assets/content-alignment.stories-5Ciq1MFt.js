import{j as t,a as p}from"./marked.esm-I79JNzkl.js";import{R as C}from"./index-KtDdPitk.js";import{D as d}from"./data-editor-all-Lc9jtUEu.js";import{B as g,D as u,P as o,a as f,d as A}from"./utils-qjSgl9HH.js";import{S as h}from"./story-utils-yBezD1KV.js";import"./iframe-7fuAmqJ8.js";import"../sb-preview/runtime.js";import"./image-window-loader-R4OcQOny.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-2fkyTdg5.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const W={title:"Glide-Data-Grid/DataEditor Demos",decorators:[l=>t(h,{children:t(g,{title:"Content Alignment",description:p(u,{children:["You can customize the content alignment by setting ",t(o,{children:"contentAlign"})," of a cell to ",t(o,{children:"left"}),", ",t(o,{children:"right"})," or ",t(o,{children:"center"}),"."]}),children:t(l,{})})})]},r=()=>{const{cols:l,getCellContent:n}=f(),m=C.useCallback(e=>{const[i,D]=e;return i===3?{...n(e),contentAlign:"center"}:i===4?{...n(e),contentAlign:"right"}:i===5?{...n(e),contentAlign:"left"}:n(e)},[n]);return t(d,{...A,getCellContent:m,columns:l,rows:300})};var c,s,a;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useAllMockedKinds();
  const mangledGetCellContent = React.useCallback<typeof getCellContent>(cell => {
    const [col, _row] = cell;
    if (col === 3) {
      return {
        ...getCellContent(cell),
        contentAlign: "center"
      };
    }
    if (col === 4) {
      return {
        ...getCellContent(cell),
        contentAlign: "right"
      };
    }
    if (col === 5) {
      return {
        ...getCellContent(cell),
        contentAlign: "left"
      };
    }
    return getCellContent(cell);
  }, [getCellContent]);
  return <DataEditor {...defaultProps} getCellContent={mangledGetCellContent} columns={cols} rows={300} />;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const z=["ContentAlignment"];export{r as ContentAlignment,z as __namedExportsOrder,W as default};

import{j as o,a as c,F as p}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as u}from"./data-editor-all-I0lib3cL.js";import{B as d,D as C,M as g,u as h,d as f}from"./utils-CX0EyYmb.js";import{S as D}from"./story-utils-yBezD1KV.js";import"./iframe-XZadCXMt.js";import"../sb-preview/runtime.js";import"./image-window-loader-54GAzo8C.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-gJD7CdIj.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>o(D,{children:o(d,{title:"Add and remove columns",description:c(p,{children:[o(C,{children:"You can add and remove columns at your disposal"}),o(g,{children:"Use the story's controls to change the number of columns"})]}),children:o(t,{})})})]},r=t=>{const{cols:a,getCellContent:m}=h(t.columnsCount),l=a.map(i=>({...i,contentAlign:"right"}));return o(u,{...f,rowMarkers:"number",getCellContent:m,experimental:{strict:!0},columns:l,rows:1e4})};r.args={columnsCount:10};r.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};var e,n,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  const newCols = cols.map(c => ({
    ...c,
    contentAlign: "right"
  }));
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} experimental={{
    strict: true
  }} columns={newCols} rows={10_000} />;
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const T=["AddColumns"];export{r as AddColumns,T as __namedExportsOrder,P as default};

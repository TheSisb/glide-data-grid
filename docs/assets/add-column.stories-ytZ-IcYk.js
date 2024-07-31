import{j as r,a as l,F as i}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as c}from"./data-editor-all-5oiS_SEE.js";import{B as p,D as u,M as d,u as C,d as f}from"./utils-rY9LVmFH.js";import{S as g}from"./story-utils-yBezD1KV.js";import"./iframe-Wn4A-lls.js";import"../sb-preview/runtime.js";import"./image-window-loader-WPLaXTPl.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-CO1Cs05N.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const B={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>r(g,{children:r(p,{title:"Add and remove columns",description:l(i,{children:[r(u,{children:"You can add and remove columns at your disposal"}),r(d,{children:"Use the story's controls to change the number of columns"})]}),children:r(t,{})})})]},o=t=>{const{cols:a,getCellContent:m}=C(t.columnsCount);return r(c,{...f,rowMarkers:"number",getCellContent:m,experimental:{strict:!0},columns:a,rows:1e4})};o.args={columnsCount:10};o.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} experimental={{
    strict: true
  }} columns={cols} rows={10_000} />;
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const F=["AddColumns"];export{o as AddColumns,F as __namedExportsOrder,B as default};

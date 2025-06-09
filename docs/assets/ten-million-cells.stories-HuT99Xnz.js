import{j as r}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as n}from"./data-editor-all-QizDv3qe.js";import{B as a,D as m,u as p,d as c}from"./utils-ybHynO-G.js";import{S as d}from"./story-utils-yBezD1KV.js";import"./iframe-DzV9Zd2n.js";import"../sb-preview/runtime.js";import"./image-window-loader-JSPr-qkA.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-eJwb0aS7.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const b={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>r(d,{children:r(a,{title:"Ten Million Cells",description:r(m,{children:"Data grid supports over 10 million cells. Go nuts with it."}),children:r(o,{})})})]},e=()=>{const{cols:o,getCellContent:l}=p(100);return r(n,{...c,rowMarkers:"number",getCellContent:l,columns:o,rows:1e5})};var t,s,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} columns={cols} rows={100_000} />;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const j=["TenMillionCells"];export{e as TenMillionCells,j as __namedExportsOrder,b as default};

import{j as e,a as p}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as m}from"./data-editor-all-Epr490r4.js";import{B as l,D as c,P as d,u,d as w}from"./utils-DYqbGGus.js";import{S as D}from"./story-utils-yBezD1KV.js";import"./iframe-w7GafUs7.js";import"../sb-preview/runtime.js";import"./image-window-loader-1khp0eEJ.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Aa3oz1mc.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const U={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e(D,{children:e(l,{title:"Uneven Rows",description:p(c,{children:["Rows can be made uneven by passing a callback to the ",e(d,{children:"rowHeight"})," prop"]}),children:e(o,{})})})]},r=()=>{const{cols:o,getCellContent:i}=u(6);return e(m,{...w,rowHeight:t=>t%3===0?30:t%2?50:60,getCellContent:i,columns:o,rows:1e3})};var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} rowHeight={r => r % 3 === 0 ? 30 : r % 2 ? 50 : 60} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const _=["UnevenRows"];export{r as UnevenRows,_ as __namedExportsOrder,U as default};
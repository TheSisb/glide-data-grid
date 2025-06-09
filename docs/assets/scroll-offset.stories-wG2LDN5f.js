import{j as r,a as n}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as i}from"./data-editor-all-dapGHCxi.js";import{B as p,D as c,P as m,u as d,d as f}from"./utils-LjRUa34z.js";import{S as u}from"./story-utils-yBezD1KV.js";import"./lodash-RH7pdWdw.js";import"./iframe-L4-qsy29.js";import"../sb-preview/runtime.js";import"./image-window-loader-DoksJUiP.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-bIZpknlR.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>r(u,{children:r(p,{title:"Scroll Offset",description:n(c,{children:["The ",r(m,{children:"rowGrouping"})," prop can be used to group and even fold rows."]}),children:r(t,{})})})]},o=()=>{const{cols:t,getCellContent:l}=d(100);return r(i,{...f,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:l,columns:t,rows:1e3})};var e,s,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const T=["ScrollOffset"];export{o as ScrollOffset,T as __namedExportsOrder,v as default};

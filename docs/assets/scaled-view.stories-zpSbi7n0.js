import{j as e}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as l}from"./data-editor-all-uxhHxUh0.js";import{B as m,D as p,u as c,d}from"./utils-k8XCilwo.js";import{S as u}from"./story-utils-yBezD1KV.js";import"./iframe-JN6vx9dS.js";import"../sb-preview/runtime.js";import"./image-window-loader-cStAGR_l.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Rbxswx8_.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const V={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e(u,{children:e(m,{title:"Scaled view",description:e(p,{children:"The data editor supports being scaled."}),scale:"0.5",children:e(r,{})})})]},o=()=>{const{cols:r,getCellContent:i,onColumnResize:n}=c(60);return e(l,{...d,getCellContent:i,columns:r,rowMarkers:"both",rows:500,onColumnResize:n})};var t,s,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={500} onColumnResize={onColumnResize} />;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const _=["ScaledView"];export{o as ScaledView,_ as __namedExportsOrder,V as default};

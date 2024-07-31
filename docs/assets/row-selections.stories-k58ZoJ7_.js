import{j as e,a as p}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as m}from"./data-editor-all-5oiS_SEE.js";import{B as w,D as k,P as t,u,d as S}from"./utils-rY9LVmFH.js";import{S as h}from"./story-utils-yBezD1KV.js";import"./iframe-Wn4A-lls.js";import"../sb-preview/runtime.js";import"./image-window-loader-WPLaXTPl.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-CO1Cs05N.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const R={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e(h,{children:e(w,{title:"Row selections",description:p(k,{children:["You can enable row selections by setting ",e(t,{children:"rowSelect"})," prop to"," ",e(t,{children:"multi"})," for multi-selection or ",e(t,{children:"single"})," for single-selection. The row marker behavior and appearance can be controlled via the"," ",e(t,{children:"rowMarkers"})," prop."]}),children:e(o,{})})})]},r=o=>{const{cols:s,getCellContent:i}=u(30);return e(m,{...S,rowSelect:o.rowSelect,rowSelectionMode:o.rowSelectionMode,getCellContent:i,rowMarkers:{kind:o.rowMarkersKind,checkboxStyle:o.rowMarkersCheckboxStyle},onHeaderClicked:(a,d)=>{console.log("onHeaderClicked",a,d)},theme:{rowMarkerIcon:"#ddd"},columns:s,rows:400})};r.args={rowSelect:"single",rowSelectionMode:"auto",rowMarkersKind:"checkbox-visible",rowMarkersCheckboxStyle:"circle"};r.argTypes={rowSelect:{control:{type:"select"},options:["none","single","multi"]},rowSelectionMode:{control:{type:"select"},options:["auto","multi"]},rowMarkersKind:{control:{type:"select"},options:["both","checkbox","number","none","clickable-number","checkbox-visible"]},rowMarkersCheckboxStyle:{control:{type:"select"},options:["square","circle"]}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(30);
  return <DataEditor {...defaultProps} rowSelect={p.rowSelect} rowSelectionMode={p.rowSelectionMode} getCellContent={getCellContent} rowMarkers={{
    kind: p.rowMarkersKind,
    checkboxStyle: p.rowMarkersCheckboxStyle
  }} onHeaderClicked={(col, event) => {
    console.log("onHeaderClicked", col, event);
  }} theme={{
    rowMarkerIcon: "#ddd"
  }} columns={cols} rows={400} />;
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const T=["RowSelections"];export{r as RowSelections,T as __namedExportsOrder,R as default};

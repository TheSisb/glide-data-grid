import{j as e,a as p}from"./marked.esm-dbrxtycE.js";import"./index-BMVQvedj.js";import{D as m}from"./data-editor-all-IkTwOZ0_.js";import{B as w,D as k,P as t,u,d as S}from"./utils-5YkRyUxE.js";import{S as h}from"./story-utils-K2EZnGjM.js";import"./iframe-nbckCwif.js";import"../sb-preview/runtime.js";import"./image-window-loader-7mLl45Sn.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-ieuFGiHK.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const R={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e(h,{children:e(w,{title:"Row selections",description:p(k,{children:["You can enable row selections by setting ",e(t,{children:"rowSelect"})," prop to"," ",e(t,{children:"multi"})," for multi-selection or ",e(t,{children:"single"})," for single-selection. The row marker behavior and appearance can be controlled via the"," ",e(t,{children:"rowMarkers"})," prop."]}),children:e(o,{})})})]},r=o=>{const{cols:s,getCellContent:i}=u(30);return e(m,{...S,rowSelect:o.rowSelect,rowSelectionMode:o.rowSelectionMode,getCellContent:i,rowMarkers:{kind:o.rowMarkersKind,checkboxStyle:o.rowMarkersCheckboxStyle},onHeaderClicked:(a,d)=>{console.log("onHeaderClicked",a,d)},theme:{rowMarkerIcon:"#ddd"},columns:s,rows:400})};r.args={rowSelect:"single",rowSelectionMode:"auto",rowMarkersKind:"checkbox-visible",rowMarkersCheckboxStyle:"circle"};r.argTypes={rowSelect:{control:{type:"select"},options:["none","single","multi"]},rowSelectionMode:{control:{type:"select"},options:["auto","multi"]},rowMarkersKind:{control:{type:"select"},options:["both","checkbox","number","none","clickable-number","checkbox-visible"]},rowMarkersCheckboxStyle:{control:{type:"select"},options:["square","circle"]}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`p => {
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

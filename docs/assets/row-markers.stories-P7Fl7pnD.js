import{j as e,F as l,a as c}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as m}from"./data-editor-all-I0lib3cL.js";import{B as p,D as d,P as u,u as k,d as h}from"./utils-CX0EyYmb.js";import{S as b}from"./story-utils-yBezD1KV.js";import"./iframe-XZadCXMt.js";import"../sb-preview/runtime.js";import"./image-window-loader-54GAzo8C.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-gJD7CdIj.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const j={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e(b,{children:e(p,{title:"Row markers",description:e(l,{children:c(d,{children:["Row Markers can be controlled by setting the ",e(u,{children:"rowMarkers"})," prop."]})}),children:e(o,{})})})]},r=o=>{const{cols:n,getCellContent:i}=k(10,!1);return e(m,{...h,getCellContent:i,verticalBorder:!1,rowMarkers:{kind:o.markers,checkboxStyle:"square",headerAlwaysVisible:!0,headerTheme:{textMedium:"rgba(51, 51, 51, 0.50)"}},columns:n,rows:400})};r.args={markers:"both"};r.argTypes={markers:{control:{type:"select"},options:["both","checkbox","number","none","clickable-number","checkbox-visible"]}};var t,a,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} verticalBorder={false} rowMarkers={{
    kind: p.markers,
    checkboxStyle: "square",
    headerAlwaysVisible: true,
    headerTheme: {
      textMedium: "rgba(51, 51, 51, 0.50)"
    }
  }} columns={cols} rows={400} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["RowMarkers"];export{r as RowMarkers,v as __namedExportsOrder,j as default};

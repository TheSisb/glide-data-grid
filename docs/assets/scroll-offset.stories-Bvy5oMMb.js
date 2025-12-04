import{R as e}from"./iframe-rB5HGBxK.js";import{D as n}from"./data-editor-all-CorTVU32.js";import{B as c,D as m,P as i,u as p,d as f}from"./utils-BKTHbzsS.js";import{S as u}from"./story-utils-DdvU__YW.js";import"./lodash-5lNkn1ta.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-CrVYDwEC.js";import"./throttle-CXm9as3A.js";import"./marked.esm-C1-Y-mj2.js";import"./flatten-BV4h7nnH.js";import"./scrolling-data-grid-yyWWlC-z.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const B={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(u,null,e.createElement(c,{title:"Scroll Offset",description:e.createElement(m,null,"The ",e.createElement(i,null,"rowGrouping")," prop can be used to group and even fold rows.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:l}=p(100);return e.createElement(n,{...f,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:l,columns:t,rows:1e3})};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const _=["ScrollOffset"];export{r as ScrollOffset,_ as __namedExportsOrder,B as default};

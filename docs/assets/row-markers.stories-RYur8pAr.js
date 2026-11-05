import{R as e}from"./iframe-COzzyJrz.js";import{D as i}from"./data-editor-all-qZV2fgyH.js";import{B as m,D as c,P as d,u as p,d as u}from"./utils-DTJUJLAC.js";import{S as b}from"./story-utils-yfw_Tnq4.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-BvBfWLWj.js";import"./throttle-DiqRXnTb.js";import"./marked.esm-DA8j_6OY.js";import"./flatten-Grlvpbf4.js";import"./scrolling-data-grid-CMxx5gcw.js";import"./click-outside-container-DnJBN2Os.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const B={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(b,null,e.createElement(m,{title:"Row markers",description:e.createElement(e.Fragment,null,e.createElement(c,null,"Row Markers can be controlled by setting the ",e.createElement(d,null,"rowMarkers")," prop."))},e.createElement(t,null)))]},r=t=>{const{cols:l,getCellContent:n}=p(10,!1);return e.createElement(i,{...u,getCellContent:n,verticalBorder:!1,rowMarkers:{kind:t.markers,checkboxStyle:"square",headerAlwaysVisible:!0,headerDisabled:t.headerDisabled,headerTheme:{textMedium:"rgba(51, 51, 51, 0.50)"}},columns:l,rows:400})};r.args={markers:"both",headerDisabled:!1};r.argTypes={markers:{control:{type:"select"},options:["both","checkbox","number","none","clickable-number","checkbox-visible"]},headerDisabled:{control:{type:"boolean"}}};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} verticalBorder={false} rowMarkers={{
    kind: p.markers,
    checkboxStyle: "square",
    headerAlwaysVisible: true,
    headerDisabled: p.headerDisabled,
    headerTheme: {
      textMedium: "rgba(51, 51, 51, 0.50)"
    }
  }} columns={cols} rows={400} />;
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const G=["RowMarkers"];export{r as RowMarkers,G as __namedExportsOrder,B as default};

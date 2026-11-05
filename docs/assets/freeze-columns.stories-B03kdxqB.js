import{R as e}from"./iframe-COzzyJrz.js";import{D as u}from"./data-editor-all-qZV2fgyH.js";import{B as i,D as c,P as p,u as C,d}from"./utils-DTJUJLAC.js";import{S as f}from"./story-utils-yfw_Tnq4.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-BvBfWLWj.js";import"./throttle-DiqRXnTb.js";import"./marked.esm-DA8j_6OY.js";import"./flatten-Grlvpbf4.js";import"./scrolling-data-grid-CMxx5gcw.js";import"./click-outside-container-DnJBN2Os.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const x={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(f,null,e.createElement(i,{title:"Freeze columns",description:e.createElement(c,null,"Columns at the start of your grid can be frozen in place by settings"," ",e.createElement(p,null,"freezeColumns")," to a number greater than 0.")},e.createElement(t,null)))]},r=t=>{const{cols:s,getCellContent:n,setCellValue:m}=C(100,!1);return e.createElement(u,{...d,rowMarkers:"both",freezeColumns:t.freezeColumns,getCellContent:n,onCellEdited:m,columns:s,verticalBorder:!1,rows:1e3})};r.argTypes={freezeColumns:{control:{type:"range",min:0,max:10}}};r.args={freezeColumns:1};var o,l,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(p: {
  freezeColumns: number;
}) => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(100, false);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={p.freezeColumns} getCellContent={getCellContent} onCellEdited={setCellValue} columns={cols} verticalBorder={false} rows={1000} />;
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const F=["FreezeColumns"];export{r as FreezeColumns,F as __namedExportsOrder,x as default};

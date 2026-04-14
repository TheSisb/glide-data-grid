import{R as e}from"./iframe-BwiwSSyP.js";import{D as u}from"./data-editor-all-ByFMLhMi.js";import{B as i,D as c,P as p,u as C,d}from"./utils-DIxErxrj.js";import{S as f}from"./story-utils-Cl8YkHcn.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-Cf3R9jXS.js";import"./throttle-5js6J7Ao.js";import"./marked.esm-CgXzdYAF.js";import"./flatten-C6igmhtY.js";import"./scrolling-data-grid-DL2V_n6N.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(f,null,e.createElement(i,{title:"Freeze columns",description:e.createElement(c,null,"Columns at the start of your grid can be frozen in place by settings"," ",e.createElement(p,null,"freezeColumns")," to a number greater than 0.")},e.createElement(t,null)))]},r=t=>{const{cols:s,getCellContent:n,setCellValue:m}=C(100,!1);return e.createElement(u,{...d,rowMarkers:"both",freezeColumns:t.freezeColumns,getCellContent:n,onCellEdited:m,columns:s,verticalBorder:!1,rows:1e3})};r.argTypes={freezeColumns:{control:{type:"range",min:0,max:10}}};r.args={freezeColumns:1};var o,l,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(p: {
  freezeColumns: number;
}) => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(100, false);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={p.freezeColumns} getCellContent={getCellContent} onCellEdited={setCellValue} columns={cols} verticalBorder={false} rows={1000} />;
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const x=["FreezeColumns"];export{r as FreezeColumns,x as __namedExportsOrder,P as default};

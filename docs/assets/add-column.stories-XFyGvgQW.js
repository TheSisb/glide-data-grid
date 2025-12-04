import{R as e}from"./iframe-BkLafyFo.js";import{D as u}from"./data-editor-all-Czt43zOW.js";import{B as i,D as p,M as d,u as C,d as g}from"./utils-BlJrF2Uv.js";import{S as E}from"./story-utils-DwjdYrNq.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-d6QkMzYP.js";import"./throttle-D7LZbMDU.js";import"./marked.esm-S5KBmSXG.js";import"./flatten-fVc8qxi7.js";import"./scrolling-data-grid-CqVRLVSU.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(E,null,e.createElement(i,{title:"Add and remove columns",description:e.createElement(e.Fragment,null,e.createElement(p,null,"You can add and remove columns at your disposal"),e.createElement(d,null,"Use the story's controls to change the number of columns"))},e.createElement(o,null)))]},t=o=>{const{cols:s,getCellContent:l}=C(o.columnsCount),m=s.map(c=>({...c,contentAlign:"right",icon:null}));return e.createElement(u,{...g,rowMarkers:"number",getCellContent:l,experimental:{strict:!0},columns:m,rows:1e4})};t.args={columnsCount:10};t.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};var n,r,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  const newCols = cols.map(c => ({
    ...c,
    contentAlign: "right",
    icon: null
  }));
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} experimental={{
    strict: true
  }} columns={newCols} rows={10_000} />;
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const v=["AddColumns"];export{t as AddColumns,v as __namedExportsOrder,S as default};

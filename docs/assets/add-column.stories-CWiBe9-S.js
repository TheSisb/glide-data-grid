import{R as e}from"./iframe-COzzyJrz.js";import{D as u}from"./data-editor-all-qZV2fgyH.js";import{B as i,D as p,M as d,u as C,d as g}from"./utils-DTJUJLAC.js";import{S as E}from"./story-utils-yfw_Tnq4.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-BvBfWLWj.js";import"./throttle-DiqRXnTb.js";import"./marked.esm-DA8j_6OY.js";import"./flatten-Grlvpbf4.js";import"./scrolling-data-grid-CMxx5gcw.js";import"./click-outside-container-DnJBN2Os.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(E,null,e.createElement(i,{title:"Add and remove columns",description:e.createElement(e.Fragment,null,e.createElement(p,null,"You can add and remove columns at your disposal"),e.createElement(d,null,"Use the story's controls to change the number of columns"))},e.createElement(o,null)))]},t=o=>{const{cols:s,getCellContent:l}=C(o.columnsCount),m=s.map(c=>({...c,contentAlign:"right",icon:null}));return e.createElement(u,{...g,rowMarkers:"number",getCellContent:l,experimental:{strict:!0},columns:m,rows:1e4})};t.args={columnsCount:10};t.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`p => {
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
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const B=["AddColumns"];export{t as AddColumns,B as __namedExportsOrder,v as default};

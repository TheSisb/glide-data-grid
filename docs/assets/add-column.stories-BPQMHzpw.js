import{R as e}from"./iframe-Dhcyq7de.js";import{D as u}from"./data-editor-all-Com2fbGs.js";import{B as i,D as p,M as d,u as C,d as g}from"./utils-B7niFk0r.js";import{S as E}from"./story-utils-CWQcs54g.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-BPshvM3J.js";import"./throttle-DdZATOY8.js";import"./marked.esm-C1hZZ7vL.js";import"./flatten-BR3zCJeW.js";import"./scrolling-data-grid-BG1AsV2v.js";import"./click-outside-container-_igJyHAJ.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(E,null,e.createElement(i,{title:"Add and remove columns",description:e.createElement(e.Fragment,null,e.createElement(p,null,"You can add and remove columns at your disposal"),e.createElement(d,null,"Use the story's controls to change the number of columns"))},e.createElement(o,null)))]},t=o=>{const{cols:s,getCellContent:l}=C(o.columnsCount),m=s.map(c=>({...c,contentAlign:"right",icon:null}));return e.createElement(u,{...g,rowMarkers:"number",getCellContent:l,experimental:{strict:!0},columns:m,rows:1e4})};t.args={columnsCount:10};t.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`p => {
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

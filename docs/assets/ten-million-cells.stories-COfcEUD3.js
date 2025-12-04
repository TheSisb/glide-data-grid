import{R as e}from"./iframe-wwk7Lk2P.js";import{D as n}from"./data-editor-all-DwqVeZ3N.js";import{B as i,D as m,u as p,d as c}from"./utils-BW9-Tvr5.js";import{S as u}from"./story-utils-CydlHlgj.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-BMy8zglW.js";import"./throttle-Br8JCf9s.js";import"./marked.esm-DVw-gq9i.js";import"./flatten-rDCQVmTw.js";import"./scrolling-data-grid-BzfoJGxP.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(u,null,e.createElement(i,{title:"Ten Million Cells",description:e.createElement(m,null,"Data grid supports over 10 million cells. Go nuts with it.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:a}=p(100);return e.createElement(n,{...c,rowMarkers:"number",getCellContent:a,columns:r,rows:1e5})};var o,l,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} columns={cols} rows={100_000} />;
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const b=["TenMillionCells"];export{t as TenMillionCells,b as __namedExportsOrder,S as default};

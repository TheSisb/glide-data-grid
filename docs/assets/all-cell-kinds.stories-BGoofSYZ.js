import{R as e}from"./iframe-Dhcyq7de.js";import{D as c}from"./data-editor-all-Com2fbGs.js";import{B as m,D as d,P as p,a as u,d as g}from"./utils-B7niFk0r.js";import{S as C}from"./story-utils-CWQcs54g.js";import"./preload-helper-C1FmrZbK.js";import"./image-window-loader-BPshvM3J.js";import"./throttle-DdZATOY8.js";import"./marked.esm-C1hZZ7vL.js";import"./flatten-BR3zCJeW.js";import"./scrolling-data-grid-BG1AsV2v.js";import"./click-outside-container-_igJyHAJ.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[l=>e.createElement(C,null,e.createElement(m,{title:"Lotsa cell kinds",description:e.createElement(d,null,"Data grid supports plenty cell kinds. Anything under ",e.createElement(p,null,"GridCellKind"),".")},e.createElement(l,null)))]},t=()=>{const{cols:l,getCellContent:i,onColumnResize:s,setCellValue:a}=u();return e.createElement(c,{...g,getCellContent:i,columns:l,onCellEdited:a,onPaste:!0,rowHeight:44,onColumnResize:s,highlightRegions:[{color:"#ff00ff33",range:{x:1,y:1,width:3,height:3}}],cellActivationBehavior:"single-click",editorBloom:[-4,-4],drawFocusRing:!1,rows:1e3})};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onPaste={true} rowHeight={44} onColumnResize={onColumnResize} highlightRegions={[{
    color: "#ff00ff33",
    range: {
      x: 1,
      y: 1,
      width: 3,
      height: 3
    }
  }]} cellActivationBehavior="single-click" editorBloom={[-4, -4]} drawFocusRing={false} rows={1000} />;
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const z=["AllCellKinds"];export{t as AllCellKinds,z as __namedExportsOrder,y as default};

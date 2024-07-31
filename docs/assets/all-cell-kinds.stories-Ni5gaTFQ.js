import{j as e,a as d}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as c}from"./data-editor-all-V3VnSPFX.js";import{B as m,D as p,P as u,a as g,d as h}from"./utils-LSfbc0Ie.js";import{S as C}from"./story-utils-yBezD1KV.js";import"./iframe-TxGx37Iq.js";import"../sb-preview/runtime.js";import"./image-window-loader-fGsjjh1m.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-MXGW5xpU.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const G={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e(C,{children:e(m,{title:"Lotsa cell kinds",description:d(p,{children:["Data grid supports plenty cell kinds. Anything under ",e(u,{children:"GridCellKind"}),"."]}),children:e(t,{})})})]},o=()=>{const{cols:t,getCellContent:n,onColumnResize:s,setCellValue:a}=g();return e(c,{...h,getCellContent:n,columns:t,onCellEdited:a,onPaste:!0,rowHeight:44,onColumnResize:s,highlightRegions:[{color:"#ff00ff33",range:{x:1,y:1,width:3,height:3}}],cellActivationBehavior:"single-click",editorBloom:[-4,-4],drawFocusRing:!1,rows:1e3})};var l,r,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const S=["AllCellKinds"];export{o as AllCellKinds,S as __namedExportsOrder,G as default};

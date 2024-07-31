import{j as e}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as n}from"./data-editor-all-5oiS_SEE.js";import{B as d,D as m,u as p,d as c}from"./utils-rY9LVmFH.js";import{S as u}from"./story-utils-yBezD1KV.js";import"./iframe-Wn4A-lls.js";import"../sb-preview/runtime.js";import"./image-window-loader-WPLaXTPl.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-CO1Cs05N.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e(u,{children:e(d,{title:"Editable Grid",description:e(m,{children:"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri."}),children:e(t,{})})})]},r=()=>{const{cols:t,getCellContent:l,setCellValue:i}=p(6,!1);return e(n,{...c,getCellContent:l,columns:t,rows:20,onCellEdited:i})};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const B=["SmallEditableGrid"];export{r as SmallEditableGrid,B as __namedExportsOrder,v as default};

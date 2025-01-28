import{j as r,F as m,a as d}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as v}from"./data-editor-all-I0lib3cL.js";import{B as u,D as g,P as t,u as h,d as D}from"./utils-CX0EyYmb.js";import{S as f}from"./story-utils-yBezD1KV.js";import"./iframe-XZadCXMt.js";import"../sb-preview/runtime.js";import"./image-window-loader-54GAzo8C.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-gJD7CdIj.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const F={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>r(f,{children:r(u,{title:"Overscroll",description:r(m,{children:d(g,{children:["You can allocate extra space at the ends of the grid by setting the"," ",r(t,{children:"overscrollX"})," and ",r(t,{children:"overscrollY"})," props"]})}),children:r(e,{})})})]},o=e=>{const{overscrollX:c,overscrollY:n}=e,{cols:i,getCellContent:p}=h(20);return r(v,{...D,getCellContent:p,columns:i,overscrollX:c,overscrollY:n,rows:50})};o.argTypes={overscrollX:{control:{type:"range",min:0,max:600}},overscrollY:{control:{type:"range",min:0,max:600}}};o.args={overscrollX:200,overscrollY:200};var s,l,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`p => {
  const {
    overscrollX,
    overscrollY
  } = p;
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} overscrollX={overscrollX} overscrollY={overscrollY} rows={50} />;
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const M=["Overscroll"];export{o as Overscroll,M as __namedExportsOrder,F as default};

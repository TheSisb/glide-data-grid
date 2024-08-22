import{j as o,a as n,F as u}from"./marked.esm-I79JNzkl.js";import{R as g}from"./index-KtDdPitk.js";import{D as f}from"./data-editor-all-Epr490r4.js";import{a as C,B as h,D as v,P as A,M as k,d as D}from"./utils-DYqbGGus.js";import{S as b}from"./story-utils-yBezD1KV.js";import"./iframe-w7GafUs7.js";import"../sb-preview/runtime.js";import"./image-window-loader-1khp0eEJ.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Aa3oz1mc.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const j={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>o(b,{children:o(e,{})})]},r=e=>{const{cols:c,getCellContent:p,onColumnResize:d,setCellValue:m}=C(),t=g.useRef(null);return o(h,{title:"Imperative scrolling",description:n(u,{children:[n(v,{children:["You can imperatively scroll to a cell by calling ",o(A,{children:"scrollTo"})," on a DataEditor ref."]}),n(k,{children:["Click ",o("button",{onClick:()=>{var l;(l=t.current)==null||l.scrollTo(4,99,"both",e.paddingX,e.paddingY,{vAlign:e.vAlign,hAlign:e.hAlign})},children:"Here"})," to scroll to column 4 row 100"]})]}),children:o(f,{...D,ref:t,rowMarkers:"clickable-number",getCellContent:p,columns:c,onCellEdited:m,onColumnResize:d,rows:1e4})})};r.args={paddingY:0,paddingX:0,vAlign:"start",hAlign:"start"};r.argTypes={paddingY:0,paddingX:0,vAlign:{control:{type:"select"},options:["start","center","end",void 0]},hAlign:{control:{type:"select"},options:["start","center","end",void 0]}};var i,a,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const ref = React.useRef<DataEditorRef>(null);
  const onClick = () => {
    ref.current?.scrollTo(4, 99, "both", p.paddingX, p.paddingY, {
      vAlign: p.vAlign,
      hAlign: p.hAlign
    });
  };
  return <BeautifulWrapper title="Imperative scrolling" description={<>
                    <Description>
                        You can imperatively scroll to a cell by calling <PropName>scrollTo</PropName> on a DataEditor
                        ref.
                    </Description>
                    <MoreInfo>
                        Click <button onClick={onClick}>Here</button> to scroll to column 4 row 100
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} ref={ref} rowMarkers="clickable-number" getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={10_000} />
        </BeautifulWrapper>;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const N=["ImperativeScroll"];export{r as ImperativeScroll,N as __namedExportsOrder,j as default};
import{j as t,a,F as d}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as s}from"./data-editor-all-Epr490r4.js";import{b as m,D as h,u as c,d as n}from"./utils-DYqbGGus.js";import{S as u}from"./story-utils-yBezD1KV.js";import"./iframe-w7GafUs7.js";import"../sb-preview/runtime.js";import"./image-window-loader-1khp0eEJ.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Aa3oz1mc.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>t(u,{children:a(m,{children:[t("h1",{children:"Layout Integration"}),t(h,{children:"Trying the grid in different situations"}),t(e,{})]})})]},r=()=>{const{cols:e,getCellContent:o}=c(1e3,!0,!0);return a(d,{children:[t(s,{...n,getCellContent:o,columns:e,rows:10,rowMarkers:"both",height:200}),t(s,{...n,getCellContent:o,columns:e,rows:10,rowMarkers:"both"}),a("div",{style:{display:"flex",height:"300px"},children:[t(s,{...n,getCellContent:o,columns:e,rows:10,rowMarkers:"both"}),t("div",{style:{flexShrink:0},children:"This is some text what happens here?"})]})]})};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(1000, true, true);
  return <>
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" height={200} />
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" />
            <div style={{
      display: "flex",
      height: "300px"
    }}>
                <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" />
                <div style={{
        flexShrink: 0
      }}>This is some text what happens here?</div>
            </div>
        </>;
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const T=["LayoutIntegration"];export{r as LayoutIntegration,T as __namedExportsOrder,P as default};
import{j as e,a as t,F as m}from"./marked.esm-I79JNzkl.js";import"./index-KtDdPitk.js";import{D as p}from"./data-editor-all-QizDv3qe.js";import{u as d,B as u,D as k,P as h,M as w,K as a,d as M}from"./utils-ybHynO-G.js";import{S as f}from"./story-utils-yBezD1KV.js";import"./iframe-DzV9Zd2n.js";import"../sb-preview/runtime.js";import"./image-window-loader-JSPr-qkA.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-eJwb0aS7.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const W={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e(f,{children:e(o,{})})]},r=()=>{const{cols:o,getCellContent:c}=d(6),l=e(p,{...M,rowMarkers:"checkbox-visible",getCellContent:c,columns:o,rows:1e3});return e(u,{title:"Automatic Row Markers",description:t(m,{children:[t(k,{children:["You can enable row markers with rich selection behavior using the"," ",e(h,{children:"rowMarkers"})," prop."]}),t(w,{children:["Use ",e(a,{children:"⇧"})," + click to make range selections, and ",e(a,{children:"Ctrl"})," (",e(a,{children:"⌘"})," on Mac) + click to add/remove individual rows."]})]}),children:l})};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const dataEditor = <DataEditor {...defaultProps} rowMarkers={"checkbox-visible"} getCellContent={getCellContent} columns={cols} rows={1000} />;
  return <BeautifulWrapper title="Automatic Row Markers" description={<>
                    <Description>
                        You can enable row markers with rich selection behavior using the{" "}
                        <PropName>rowMarkers</PropName> prop.
                    </Description>
                    <MoreInfo>
                        Use <KeyName>⇧</KeyName> + click to make range selections, and <KeyName>Ctrl</KeyName> (
                        <KeyName>⌘</KeyName> on Mac) + click to add/remove individual rows.
                    </MoreInfo>
                </>}>
            {dataEditor}
        </BeautifulWrapper>;
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const j=["AutomaticRowMarkers"];export{r as AutomaticRowMarkers,j as __namedExportsOrder,W as default};

import{j as t,F as m}from"./marked.esm-I79JNzkl.js";import{R as l}from"./index-KtDdPitk.js";import{D as p}from"./data-editor-all-Epr490r4.js";import{B as g,D as E,u as f,d as h}from"./utils-DYqbGGus.js";import{G as M}from"./image-window-loader-1khp0eEJ.js";import{S as k}from"./story-utils-yBezD1KV.js";import"./iframe-w7GafUs7.js";import"../sb-preview/runtime.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Aa3oz1mc.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const V={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>t(k,{children:t(g,{title:"Right to Left support",description:t(m,{children:t(E,{children:"The data editor automatically detects RTL in text cells and respects it."})}),children:t(r,{})})})]},o=()=>{const{cols:r,getCellContent:u,setCellValue:i,onColumnResize:D}=f(60,!1),c=l.useMemo(()=>{const e=[...r];return e[0]={...e[0],title:"גלייד",hasMenu:!0},e},[r]),C=l.useCallback(e=>{const[d,R]=e;return d!==0?u(e):{kind:M.Text,allowOverlay:!0,data:"אני גדעון, מומחה לאפליקציות גלייד.",displayData:"אני גדעון, מומחה לאפליקציות גלייד.",allowWrapping:!0}},[u]);return t(p,{...h,getCellContent:C,columns:c,onColumnResize:D,getCellsForSelection:!0,rowMarkers:"both",onHeaderMenuClick:()=>alert("menu click"),onPaste:!0,onCellEdited:i,rows:1e3})};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue,
    onColumnResize
  } = useMockDataGenerator(60, false);
  const realCols = React.useMemo(() => {
    const result = [...cols];
    result[0] = {
      ...result[0],
      title: "גלייד",
      hasMenu: true
    };
    return result;
  }, [cols]);
  const getCellContentMangled = React.useCallback<typeof getCellContent>(item => {
    const [col, _row] = item;
    if (col !== 0) return getCellContent(item);
    return {
      kind: GridCellKind.Text,
      allowOverlay: true,
      data: "אני גדעון, מומחה לאפליקציות גלייד.",
      displayData: "אני גדעון, מומחה לאפליקציות גלייד.",
      allowWrapping: true
    };
  }, [getCellContent]);
  return <DataEditor {...defaultProps} getCellContent={getCellContentMangled} columns={realCols} onColumnResize={onColumnResize} getCellsForSelection={true} rowMarkers={"both"} onHeaderMenuClick={() => alert("menu click")} onPaste={true} onCellEdited={setCellValue} rows={1000} />;
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const j=["RightToLeft"];export{o as RightToLeft,j as __namedExportsOrder,V as default};
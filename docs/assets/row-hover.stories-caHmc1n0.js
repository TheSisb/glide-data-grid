import{j as e,a as p}from"./marked.esm-I79JNzkl.js";import{R as n}from"./index-KtDdPitk.js";import{D as w}from"./data-editor-all-uxhHxUh0.js";import{B as v,D as h,P as R,a as g,d as C}from"./utils-k8XCilwo.js";import{S as b}from"./story-utils-yBezD1KV.js";import"./iframe-JN6vx9dS.js";import"../sb-preview/runtime.js";import"./image-window-loader-cStAGR_l.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Rbxswx8_.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const K={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e(b,{children:e(v,{title:"Row Hover Effect",description:p(h,{children:["Through careful usage of the ",e(R,{children:"onItemHovered"})," callback it is possible to easily create a row hover effect."]}),children:e(t,{})})})]},r=()=>{const{cols:t,getCellContent:c}=g(),[s,d]=n.useState(void 0),m=n.useCallback(o=>{const[k,f]=o.location;d(o.kind!=="cell"?void 0:f)},[]),u=n.useCallback(o=>{if(o===s)return{bgCell:"#f7f7f7",bgCellMedium:"#f0f0f0"}},[s]);return e(w,{...C,rowMarkers:"both",onItemHovered:m,getCellContent:c,getRowThemeOverride:u,columns:t,rows:300})};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useAllMockedKinds();
  const [hoverRow, setHoverRow] = React.useState<number | undefined>(undefined);
  const onItemHovered = React.useCallback((args: GridMouseEventArgs) => {
    const [_, row] = args.location;
    setHoverRow(args.kind !== "cell" ? undefined : row);
  }, []);
  const getRowThemeOverride = React.useCallback<GetRowThemeCallback>(row => {
    if (row !== hoverRow) return undefined;
    return {
      bgCell: "#f7f7f7",
      bgCellMedium: "#f0f0f0"
    };
  }, [hoverRow]);
  return <DataEditor {...defaultProps} rowMarkers="both" onItemHovered={onItemHovered} getCellContent={getCellContent} getRowThemeOverride={getRowThemeOverride} columns={cols} rows={300} />;
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const W=["RowHover"];export{r as RowHover,W as __namedExportsOrder,K as default};

import{j as n,a as O}from"./marked.esm-I79JNzkl.js";import{R as l}from"./index-KtDdPitk.js";import{D as h}from"./data-editor-all-Epr490r4.js";import{B as x,D as I,P as f,u as D,c as b,d as k}from"./utils-DYqbGGus.js";import{a}from"./image-window-loader-1khp0eEJ.js";import{S as T}from"./story-utils-yBezD1KV.js";import"./iframe-w7GafUs7.js";import"../sb-preview/runtime.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Aa3oz1mc.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const K={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>n(T,{children:n(x,{title:"Trailing row options",description:O(I,{children:["You can customize the trailing row in each column by setting a"," ",n(f,{children:"trailingRowOptions"})," in your columns."]}),children:n(o,{})})})]},A={2:"Smol text",3:"Add",5:"New"},E={2:a.HeaderArray,3:a.HeaderEmoji,5:a.HeaderNumber},S={2:0,3:0,5:0},V={3:!0},y={2:{baseFontStyle:"10px"}},s=()=>{const{cols:o,getCellContent:i,setCellValueRaw:c,setCellValue:d}=D(60,!1),[r,w]=l.useState(50),R=l.useCallback(()=>{const t=r;for(let e=0;e<6;e++){const g=i([e,t]);c([e,t],b(g))}w(e=>e+1)},[i,r,c]),C=l.useMemo(()=>o.map((t,e)=>({...t,trailingRowOptions:{hint:A[e],addIcon:E[e],targetColumn:S[e],disabled:V[e],themeOverride:y[e]}})),[o]);return n(h,{...k,getCellContent:i,columns:C,rowMarkers:"both",onCellEdited:d,trailingRowOptions:{tint:!0,sticky:!0},rows:r,onRowAppended:R})};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
  }, [getCellContent, numRows, setCellValueRaw]);
  const columnsWithRowOptions: GridColumn[] = React.useMemo(() => {
    return cols.map((c, idx) => ({
      ...c,
      trailingRowOptions: {
        hint: trailingRowOptionsColumnIndexesHint[idx],
        addIcon: trailingRowOptionsColumnIndexesIcon[idx],
        targetColumn: trailingRowOptionsColumnIndexesTarget[idx],
        disabled: trailingRowOptionsColumnIndexesDisabled[idx],
        themeOverride: trailingRowOptionsColumnIndexesTheme[idx]
      }
    }));
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columnsWithRowOptions} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    tint: true,
    sticky: true
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const L=["TrailingRowOptions"];export{s as TrailingRowOptions,L as __namedExportsOrder,K as default};
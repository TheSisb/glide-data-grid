import{j as t,a as x}from"./marked.esm-I79JNzkl.js";import{R as l}from"./index-KtDdPitk.js";import{D as v}from"./data-editor-all-T3T9mpwh.js";import{B as h,D as k,P as f,u as I,d as S}from"./utils-5CEaksMD.js";import{S as w}from"./story-utils-yBezD1KV.js";import"./iframe-GD0UgL-G.js";import"../sb-preview/runtime.js";import"./image-window-loader-8Os_zXXQ.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-FIS5eKkg.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const q={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>t(w,{children:t(h,{title:"Rearrange Columns",description:x(k,{children:["Columns can be rearranged by drag and dropping, as long as you respond to the"," ",t(f,{children:"onColumnMoved"})," callback."]}),children:t(e,{})})})]},s=()=>{const{cols:e,getCellContent:d}=I(60),[a,p]=l.useState(e),u=l.useCallback((r,o)=>{p(c=>{const n=[...c],[M]=n.splice(r,1);return n.splice(o,0,M),n})},[]),g=l.useCallback((r,o)=>o!==3,[]),b=l.useCallback(([r,o])=>{const c=e.findIndex(n=>n.title===a[r].title);return d([c,o])},[e,d,a]);return t(v,{...S,freezeColumns:1,rowMarkers:"both",getCellContent:b,onColumnProposeMove:g,columns:a,onColumnMoved:u,columnSelectionBlending:"mixed",rangeSelectionBlending:"mixed",rows:1e3})};var i,C,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(60);

  // This is a dirty hack because the mock generator doesn't really support changing this. In a real data source
  // you should track indexes properly
  const [sortableCols, setSortableCols] = React.useState(cols);
  const onColMoved = React.useCallback((startIndex: number, endIndex: number): void => {
    setSortableCols(old => {
      const newCols = [...old];
      const [toMove] = newCols.splice(startIndex, 1);
      newCols.splice(endIndex, 0, toMove);
      return newCols;
    });
  }, []);
  const onColProposeMove = React.useCallback((_startIndex: number, endIndex: number): boolean => {
    return endIndex !== 3;
  }, []);
  const getCellContentMangled = React.useCallback(([col, row]: Item): GridCell => {
    const remappedCol = cols.findIndex(c => c.title === sortableCols[col].title);
    return getCellContent([remappedCol, row]);
  }, [cols, getCellContent, sortableCols]);
  return <DataEditor {...defaultProps} freezeColumns={1} rowMarkers="both" getCellContent={getCellContentMangled} onColumnProposeMove={onColProposeMove} columns={sortableCols} onColumnMoved={onColMoved} columnSelectionBlending="mixed" rangeSelectionBlending="mixed" rows={1000} />;
}`,...(m=(C=s.parameters)==null?void 0:C.docs)==null?void 0:m.source}}};const F=["RearrangeColumns"];export{s as RearrangeColumns,F as __namedExportsOrder,q as default};

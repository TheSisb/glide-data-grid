import{j as t,F as R,a as y}from"./marked.esm-I79JNzkl.js";import{R as s}from"./index-KtDdPitk.js";import{C as i,u as V}from"./image-window-loader-1khp0eEJ.js";import{D as v}from"./data-editor-all-Epr490r4.js";import{B as D,D as E,P as K,a as k,d as F}from"./utils-DYqbGGus.js";import{S as P}from"./story-utils-yBezD1KV.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./iframe-w7GafUs7.js";import"../sb-preview/runtime.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-Aa3oz1mc.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const Y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>t(P,{children:t(D,{title:"Controlling search results",description:t(R,{children:y(E,{children:["Search results can be controlled via ",t(K,{children:"searchResults"}),". You can implement any search algorithm you want, even a silly one."]})}),children:t(r,{})})})]},n=()=>{const{cols:r,getCellContent:p,onColumnResize:S,setCellValue:d}=k(),[C,l]=s.useState(!1),[f,g]=s.useState({rows:i.empty(),columns:i.empty()});V("keydown",s.useCallback(e=>{(e.ctrlKey||e.metaKey)&&e.code==="KeyF"&&(l(o=>!o),e.stopPropagation(),e.preventDefault())},[]),window,!1,!0);const[a,c]=s.useState(""),w=s.useMemo(()=>{const e=[];for(let o=0;o<a.length;o++)e.push([3,o]);return e},[a.length]);return t(v,{...F,searchResults:w,getCellContent:p,getCellsForSelection:!0,gridSelection:f,onGridSelectionChange:g,columns:r,onCellEdited:d,onColumnResize:S,searchValue:a,onSearchValueChange:c,showSearch:C,onSearchClose:()=>{l(!1),c("")},rows:1e4})};var u,h,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const [showSearch, setShowSearch] = React.useState(false);
  const [selection, setSelection] = React.useState<GridSelection>({
    rows: CompactSelection.empty(),
    columns: CompactSelection.empty()
  });
  useEventListener("keydown", React.useCallback(event => {
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyF") {
      setShowSearch(cv => !cv);
      event.stopPropagation();
      event.preventDefault();
    }
  }, []), window, false, true);
  const [searchValue, setSearchValue] = React.useState("");
  const searchResults = React.useMemo(() => {
    const result: Item[] = [];
    for (let i = 0; i < searchValue.length; i++) {
      result.push([3, i]);
    }
    return result;
  }, [searchValue.length]);
  return <DataEditor {...defaultProps} searchResults={searchResults} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} searchValue={searchValue} onSearchValueChange={setSearchValue} showSearch={showSearch} onSearchClose={() => {
    setShowSearch(false);
    setSearchValue("");
  }} rows={10_000} />;
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const q=["ControlledSearch"];export{n as ControlledSearch,q as __namedExportsOrder,Y as default};
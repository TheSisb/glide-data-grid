import{j as e,F as f}from"./marked.esm-I79JNzkl.js";import{R as o}from"./index-KtDdPitk.js";import{C as c,u as V}from"./image-window-loader-DoksJUiP.js";import{D as y}from"./data-editor-all-dapGHCxi.js";import{B as R,D,a as F,d as v}from"./utils-LjRUa34z.js";import{S as E}from"./story-utils-yBezD1KV.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./iframe-L4-qsy29.js";import"../sb-preview/runtime.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-bIZpknlR.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const T={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>e(E,{children:e(R,{title:"Filtering down to search results",description:e(f,{children:e(D,{children:"You can update your grid however you want based on search inputs."})}),children:e(a,{})})})]},s=()=>{const{cols:a,getCellContent:m,onColumnResize:p,setCellValue:S}=F(),[d,n]=o.useState(!1),[C,g]=o.useState({rows:c.empty(),columns:c.empty()});V("keydown",o.useCallback(t=>{(t.ctrlKey||t.metaKey)&&t.code==="KeyF"&&(n(w=>!w),t.stopPropagation(),t.preventDefault())},[]),window,!1,!0);const[r,l]=o.useState("");return e(y,{...v,searchResults:[],getCellContent:m,getCellsForSelection:!0,gridSelection:C,onGridSelectionChange:g,columns:a,onCellEdited:S,onColumnResize:p,searchValue:r,onSearchValueChange:l,showSearch:d,onSearchClose:()=>{n(!1),l("")},rows:r.length===0?1e4:r.length})};var i,u,h;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
  return <DataEditor {...defaultProps} searchResults={[]} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} searchValue={searchValue} onSearchValueChange={setSearchValue} showSearch={showSearch} onSearchClose={() => {
    setShowSearch(false);
    setSearchValue("");
  }} rows={searchValue.length === 0 ? 10_000 : searchValue.length} />;
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const Y=["SearchAsFilter"];export{s as SearchAsFilter,Y as __namedExportsOrder,T as default};

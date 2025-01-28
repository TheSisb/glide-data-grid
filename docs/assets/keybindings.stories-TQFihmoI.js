import{j as n,a as s}from"./marked.esm-I79JNzkl.js";import{r as h}from"./index-KtDdPitk.js";import{D as f,k as C}from"./data-editor-all-I0lib3cL.js";import{u as x,B as K,D as v,d as w}from"./utils-CX0EyYmb.js";import{S as D}from"./story-utils-yBezD1KV.js";import"./iframe-XZadCXMt.js";import"../sb-preview/runtime.js";import"./image-window-loader-54GAzo8C.js";import"./throttle-UPaD_CsS.js";import"./_baseIteratee-MFXT5464.js";import"./flatten-5Fd1fcTu.js";import"./scrolling-data-grid-gJD7CdIj.js";import"./index-PWBWJyi_.js";import"./index.esm-iAJ67Rxz.js";import"./index-iY2XSz2k.js";const N={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>n(D,{children:n(o,{})})]},i=()=>{const{getCellContent:o,cols:y,setCellValue:g}=x(30,!1),u={display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridColumnGap:"32px",gridRowGap:"10px",marginBottom:"10px",marginTop:"20px",font:"13px sans-serif"},m={display:"flex",justifyContent:"space-between",alignItems:"center"},{copy:S,cut:G,paste:j,pageDown:E,pageUp:T,first:B,last:M,...a}=C,[r,b]=h.useState(a),l=(e,t)=>{b(k=>({...k,[e]:t}))};return n(K,{title:"Custom Keybindings",description:s(v,{children:["This demo showcases custom keybindings. Modify the keybindings using the controls below.",n("div",{style:u,children:Object.keys(a).map(e=>s("div",{style:m,children:[s("label",{children:[e,": "]}),s("div",{children:[n("input",{type:"checkbox",checked:r[e]===!0,onChange:t=>l(e,!!t.target.checked)}),n("input",{type:"text",style:{width:"100px"},value:r[e]||"",onChange:t=>l(e,t.target.value)})]})]},e))})]}),children:n(f,{...w,getCellContent:o,onCellEdited:g,keybindings:r,columns:y,rangeSelect:"multi-rect",rows:100,rowMarkers:"both"})})};var d,p,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    getCellContent,
    cols,
    setCellValue
  } = useMockDataGenerator(30, false);
  const keybindingStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: "32px",
    gridRowGap: "10px",
    marginBottom: "10px",
    marginTop: "20px",
    font: "13px sans-serif"
  };
  const controlGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const {
    copy,
    cut,
    paste,
    pageDown,
    pageUp,
    first,
    last,
    ...rest
  } = keybindingDefaults;
  const [keybindings, setKeybindings] = useState<Partial<Keybinds>>(rest);
  const handleKeybindingChange = (key: keyof Keybinds, value: Keybind) => {
    setKeybindings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <BeautifulWrapper title="Custom Keybindings" description={<Description>
                    This demo showcases custom keybindings. Modify the keybindings using the controls below.
                    <div style={keybindingStyle}>
                        {Object.keys(rest).map(key => <div key={key} style={controlGroupStyle}>
                                <label>{key}: </label>
                                <div>
                                    <input type="checkbox" checked={keybindings[(key as keyof Keybinds)] === true} onChange={e => handleKeybindingChange((key as keyof Keybinds), e.target.checked ? true : false)} />
                                    <input type="text" style={{
            width: "100px"
          }} value={(keybindings[(key as keyof Keybinds)] as string) || ""} onChange={e => handleKeybindingChange((key as keyof Keybinds), e.target.value)} />
                                </div>
                            </div>)}
                    </div>
                </Description>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} onCellEdited={setCellValue} keybindings={keybindings} columns={cols} rangeSelect="multi-rect" rows={100} rowMarkers="both" />
        </BeautifulWrapper>;
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Q=["CustomKeybindings"];export{i as CustomKeybindings,Q as __namedExportsOrder,N as default};

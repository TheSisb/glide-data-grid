import{R as t}from"./iframe-COzzyJrz.js";import{G as u}from"./image-window-loader-BvBfWLWj.js";import{D as c}from"./data-editor-all-qZV2fgyH.js";import{B as p,D as C,u as f,d as E}from"./utils-DTJUJLAC.js";import{S as g}from"./story-utils-yfw_Tnq4.js";import"./preload-helper-C1FmrZbK.js";import"./throttle-DiqRXnTb.js";import"./marked.esm-DA8j_6OY.js";import"./flatten-Grlvpbf4.js";import"./scrolling-data-grid-CMxx5gcw.js";import"./click-outside-container-DnJBN2Os.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>t.createElement(g,null,t.createElement(p,{title:"Editable Grid",description:t.createElement(C,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},t.createElement(r,null)))]},l=()=>{const{cols:r,getCellContent:s,setCellValue:i}=f(7,!1),d=e=>{const[m,D]=e;return m===6?{kind:u.Number,data:100,displayData:"100",readonly:!1,allowOverlay:!0}:s(e)};return t.createElement(c,{...E,getCellContent:d,columns:t.useMemo(()=>{const e=[...r];return e.length>6&&(e[6]={...e[6],title:"NUMBER",width:250}),e},[r]),rows:20,onCellEdited:i})};var n,a,o;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(7, false);
  const _getCellContent = (cell: Item) => {
    const [col, row] = cell;
    if (col === 6) {
      return {
        kind: GridCellKind.Number,
        data: 100,
        displayData: "100",
        readonly: false,
        allowOverlay: true
      };
    }
    return getCellContent(cell);
  };
  return <DataEditor {...defaultProps} getCellContent={_getCellContent} columns={React.useMemo(() => {
    const updated = [...cols];
    if (updated.length > 6) {
      updated[6] = {
        ...updated[6],
        title: "NUMBER",
        width: 250
      } as any;
    }
    return updated;
  }, [cols])} rows={20} onCellEdited={setCellValue} />;
}`,...(o=(a=l.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const V=["SmallEditableGrid"];export{l as SmallEditableGrid,V as __namedExportsOrder,O as default};

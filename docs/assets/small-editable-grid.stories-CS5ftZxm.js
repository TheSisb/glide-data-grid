import{R as t}from"./iframe-UCKTa6BV.js";import{G as m}from"./image-window-loader-BIT7AnPH.js";import{D as c}from"./data-editor-all-C2YstsbC.js";import{B as p,D as C,u as f,d as g}from"./utils-CTAEJKt0.js";import{S as E}from"./story-utils-DCiOTirX.js";import"./preload-helper-C1FmrZbK.js";import"./throttle-DRnjqVFL.js";import"./marked.esm-B58ZjuzW.js";import"./flatten-wdCZvo8x.js";import"./scrolling-data-grid-waVn8UEN.js";import"./index-D_kXk1yT.js";import"./throttle--dN168Gr.js";const B={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>t.createElement(E,null,t.createElement(p,{title:"Editable Grid",description:t.createElement(C,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},t.createElement(r,null)))]},l=()=>{const{cols:r,getCellContent:s,setCellValue:i}=f(7,!1),d=e=>{const[u,D]=e;return u===6?{kind:m.Number,data:100,displayData:"100",readonly:!1,allowOverlay:!0,allowNegative:!0}:s(e)};return t.createElement(c,{...g,getCellContent:d,columns:t.useMemo(()=>{const e=[...r];return e.length>6&&(e[6]={...e[6],title:"NUMBER",width:250}),e},[r]),rows:20,onCellEdited:i})};var n,a,o;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
        allowOverlay: true,
        allowNegative: true
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
}`,...(o=(a=l.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const O=["SmallEditableGrid"];export{l as SmallEditableGrid,O as __namedExportsOrder,B as default};

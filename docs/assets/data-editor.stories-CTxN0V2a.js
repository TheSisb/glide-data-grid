import{r as s}from"./iframe-COzzyJrz.js";import{B as je}from"./story-utils-yfw_Tnq4.js";import{C as w,G as i}from"./image-window-loader-BvBfWLWj.js";import{D as c}from"./data-editor-all-qZV2fgyH.js";import"./preload-helper-C1FmrZbK.js";import"./marked.esm-DA8j_6OY.js";import"./throttle-DiqRXnTb.js";import"./flatten-Grlvpbf4.js";import"./scrolling-data-grid-CMxx5gcw.js";import"./click-outside-container-DnJBN2Os.js";const{useState:d,useCallback:m,useMemo:h}=__STORYBOOK_MODULE_PREVIEW_API__,ct={title:"Tests/TestCases",decorators:[e=>s.createElement(je,{width:1e3,height:800},s.createElement(e,null))]};function g([e,t]){return e===0?{kind:i.RowID,data:`RowID ${e}, ${t}`,allowOverlay:!1}:e===1?{kind:i.Bubble,data:[`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`],allowOverlay:!0}:e===2?{kind:i.Image,data:["https://i.imgur.com/5J0BftG.jpg","https://preview.redd.it/7jlqkp2cyap51.jpg?width=575&auto=webp&s=26fa9ed15b16fb450ee08ed1f2f0ccb5e0223581"],allowOverlay:!0,readonly:!1}:e===3?{kind:i.Markdown,data:`## Markdown has titles

And supports newline chars and automatic wrapping text that just needs to be long enough to trigger it.


[Google](https://google.com)

- with
- lists
- that
- can
- be
- pretty
- long
                    `,allowOverlay:!0}:e===4?{kind:i.Number,displayData:"$10,352",allowOverlay:!0,data:10352,readonly:!0}:e===5?{kind:i.Uri,data:"https://www.google.com",allowOverlay:!0}:e===6?{kind:i.Boolean,data:t%3===0||t%5===0,readonly:!0,allowOverlay:!1}:e===7?{kind:i.Text,displayData:"הרפתקה חדשה",data:"הרפתקה חדשה",allowOverlay:!0,readonly:!0}:e===8?{kind:i.Drilldown,data:[{text:"Test",img:"https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg"},{text:"No Image"}],allowOverlay:!0}:{kind:i.Text,displayData:`${e}, ${t} 🦝`,data:`${e}, ${t} 🦝`,allowOverlay:!0}}function S(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(e=>({title:e.toString()+" is the longest header in the world",width:120+e%4*10,icon:"headerString",hasMenu:!0}))}function y(){const[e,t]=d(S),n=m((o,r)=>{const l=e.indexOf(o),a=[...e];a[l]={...a[l],width:r},t(a)},[e]);return s.createElement(c,{width:"100%",getCellContent:g,getCellsForSelection:!0,columns:e,rows:1e3,onColumnResize:n})}function Pe(){return[{title:"Relation",width:360,icon:"headerString",hasMenu:!0}]}function qe([e,t]){return{kind:i.Drilldown,data:[{text:`Image ${e}-${t}`,img:"https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg"},{text:`Text ${e}-${t}`},{text:`More text ${e}-${t}`}],allowOverlay:!0}}function b(){const[e,t]=d(Pe),n=m((o,r)=>{const l=e.indexOf(o),a=[...e];a[l]={...a[l],width:r},t(a)},[e]);return s.createElement(c,{width:"100%",getCellContent:qe,columns:e,rows:1e3,onColumnResize:n,smoothScrollX:!0,smoothScrollY:!0})}const I=[{title:"Number",width:100,icon:"headerArray",overlayIcon:"rowOwnerOverlay"},{title:"Square",width:100}];function f([e,t]){const n=Math.pow(t,e+1);return{kind:i.Number,data:n,displayData:n.toString(),allowOverlay:!1}}function v(){return s.createElement(c,{width:"100%",getCellContent:f,columns:I,rows:1e3})}function D(){const[e,t]=d(S),n=m((o,r)=>{const l=e.indexOf(o);if(l!==-1){const a={...o,width:r},u=[...e];u.splice(l,1,a),t(u)}},[e]);return s.createElement(c,{width:"100%",getCellContent:g,onColumnResize:n,columns:e,rows:1e3,smoothScrollY:!0,smoothScrollX:!0})}function k(){const[e,t]=d(void 0),n=o=>{var r;(((r=o.current)==null?void 0:r.cell[0])??0)%2===0&&t(o)};return s.createElement(c,{width:"100%",gridSelection:e,onGridSelectionChange:n,getCellContent:f,columns:I,rows:1e3})}function G(){return s.createElement(c,{width:"100%",isDraggable:!0,onDragStart:e=>{e.setData("text","testing")},getCellContent:f,columns:I,rows:1e3})}function E(){const e=[{title:"Number",width:250},{title:"Square",width:250}];return s.createElement("div",{style:{width:500,height:500,position:"relative"}},s.createElement(c,{width:500,height:500,isDraggable:!0,onDragStart:t=>{t.setData("text","testing")},getCellContent:f,columns:e,smoothScrollX:!0,smoothScrollY:!0,rowHeight:50,headerHeight:50,rows:9}))}function p({columnCount:e}){const t=[{title:"Number",width:250},{title:"Square",width:250}];for(let n=2;n<e;n++)t.push({title:"Foo",width:250});return s.createElement(c,{width:"100%",isDraggable:!0,getCellContent:f,columns:t,smoothScrollX:!0,smoothScrollY:!0,rowHeight:50,headerHeight:50,rows:9})}p.args={columnCount:2};function R(){const e=h(()=>S().map(a=>({...a,width:300,title:"Making column smaller used to crash!"})),[]),[t,n]=d({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:w.empty(),rows:w.empty()}),[o,r]=d(e),l=m(a=>{n(a)},[]);return s.createElement(c,{width:"100%",getCellContent:g,columns:o,rows:1e3,onGridSelectionChange:l,gridSelection:t,onColumnResize:(a,u)=>{u>300?r(e):r([])}})}function Fe(){return{"resize me 0":120,"resize me 1":120,"resize me 2":120,"resize me 3":120,"resize me 4":120,"resize me 5":120,"resize me 6":120,"resize me 7":120}}function Ue(e){return Object.entries(e).map(([t,n])=>({title:t,width:n,icon:"headerString",hasMenu:!0}))}function x(){const[e,t]=d(Fe),n=h(()=>Ue(e),[e]),o=m((r,l)=>{t(a=>({...a,[r.title]:l}))},[]);return s.createElement(c,{width:"100%",getCellContent:g,columns:n,rows:20,isDraggable:!1,smoothScrollX:!0,smoothScrollY:!0,onColumnResize:o})}function O(){const e=h(()=>S().map(a=>({...a,width:300,title:"Making column smaller used to crash!"})),[]),[t,n]=d({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:w.empty(),rows:w.empty()}),[o,r]=d(e),l=m(a=>{n(a)},[]);return s.createElement(c,{width:"100%",getCellContent:g,columns:o,rows:1e3,onGridSelectionChange:l,gridSelection:t,onColumnResize:(a,u)=>{u>300?r(e):r([e[0]])}})}function z(){const e=h(S,[]),[t,n]=d(10),o=m(()=>{n(u=>u+1)},[]),[r,l]=d(void 0),a=m(u=>{l(u)},[]);return s.createElement(c,{width:"100%",getCellContent:g,columns:e,rows:t,onRowAppended:o,onGridSelectionChange:a,gridSelection:r})}function M(){const e=h(S,[]),[t,n]=d(void 0),o=m(r=>{n(r)},[]);return s.createElement(c,{width:"100%",getCellContent:g,columns:e,rows:100,onGridSelectionChange:o,gridSelection:t})}function A(){const e=h(()=>[{title:"MD short",width:50},{title:"MD long",width:50}],[]),t=m(([l,a])=>l===0?{data:"text",allowOverlay:!0,kind:i.Markdown}:l===1?{data:`text really really really long
## H1

- this
- is
- a
- longer
- example
- to
- test
- scroll
- of
- preview
                `,allowOverlay:!0,kind:i.Markdown}:{data:"text",allowOverlay:!0,kind:i.Markdown},[]),[n,o]=d({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:w.empty(),rows:w.empty()}),r=m(l=>{o(l)},[]);return s.createElement(c,{width:"100%",getCellContent:t,columns:e,rows:1e3,onGridSelectionChange:r,gridSelection:n})}const B=()=>{const[e,t]=d([!1,!1]);return s.createElement(c,{width:"100%",columns:[{title:"Editable",width:100},{title:"Readonly",width:100}],rows:1,getCellContent:([n])=>({kind:i.Boolean,readonly:n!==0,allowOverlay:!1,data:e[n]}),onCellEdited:([n],o)=>{o.kind===i.Boolean&&t(r=>{const l=[...r];return l.splice(n,1,o.data),l})}})},V=()=>{const[e,t]=d(()=>{const n=[];for(let o=0;o<2e3;o++)n.push(["Edit","Me"]);return n});return s.createElement(c,{width:"100%",columns:[{title:"Column A",width:250},{title:"Column B",width:250}],rows:e.length,getCellContent:([n,o])=>({kind:i.Text,allowOverlay:!0,data:e[o][n],displayData:e[o][n]}),onCellEdited:([n,o],r)=>{const l=[...e],a=[...l[o]];typeof r.data=="string"&&(a[n]=r.data),l[o]=a,t(l)}})};function T(){const e=[{title:"Col1",width:100,grow:1,group:"Group"}],[t,n]=d(0);return s.createElement("div",null,s.createElement("h3",null,"Click count: ",t),s.createElement(c,{width:500,height:500,rows:0,columns:e,getCellContent:()=>({kind:i.Text,data:"",displayData:"",allowOverlay:!1}),getGroupDetails:o=>({name:o,actions:[{icon:"headerString",title:"Action",onClick:r=>n(l=>l+1)}]})}))}function $(){const[e,t]=d(["col-a","col-b"]),n=e.map(C=>({id:C,title:C,width:100})),o=s.useCallback(()=>({kind:i.Loading,allowOverlay:!1}),[]),r=()=>{const C=Math.random().toString(36).slice(2,8);t(H=>[...H,C])},l=C=>{t(H=>H.filter((Qe,Le)=>!C.includes(Le)))},[a,u]=d(void 0),N=C=>C.columns.length>0?(u(void 0),l(C.columns.toArray()),!1):!0;return s.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},s.createElement("div",{style:{marginBottom:8}},s.createElement("button",{onClick:r},"Add")),s.createElement("div",{style:{flex:1,position:"relative"}},s.createElement(c,{width:"100%",height:"100%",columns:n,rows:0,getCellContent:o,gridSelection:a,onGridSelectionChange:u,onDelete:N})))}const We={greenAlpha:"oklch(0.7 0.15 150 / 0.2)",red:"oklch(0.627955 0.257683 29.2339)",tan:"oklch(0.85 0.06 80)",navy:"oklch(0.3 0.05 262)",navyAlpha:"oklch(0.3 0.05 262 / 0.16)",blue:"oklch(0.5 0.2 262)",blueAlpha:"oklch(0.5 0.2 262 / 0.1)"},Je={greenAlpha:"rgba(76, 184, 106, 0.2)",red:"rgb(255, 0, 0)",tan:"rgb(227, 202, 162)",navy:"rgb(32, 46, 71)",navyAlpha:"rgba(32, 46, 71, 0.16)",blue:"rgb(25, 87, 210)",blueAlpha:"rgba(25, 87, 210, 0.1)"},_=()=>{const e=t=>{const n=([o,r])=>{const l=(r*31+o*17)%200-100,a=o===2?{bgCell:t.tan}:l<0?{textDark:t.red}:void 0;return{kind:i.Number,data:l,displayData:l.toString(),allowOverlay:!1,themeOverride:a}};return s.createElement(c,{width:680,height:280,initialSize:[680,280],columns:[{title:"Value A",width:150},{title:"Value B",width:150},{title:"Tan background",width:150},{title:"Value D",width:150}],rows:100,getCellContent:n,getRowThemeOverride:o=>o%2===1?{bgCell:t.greenAlpha}:void 0,rowMarkers:"both",theme:{accentColor:t.blue,accentLight:t.blueAlpha,textDark:t.navy,borderColor:t.navyAlpha,linkColor:t.blue}})};return s.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},s.createElement("div",null,"All colors as oklch() strings"),e(We),s.createElement("div",null,"The same colors as the sRGB values Chromium resolves them to, for comparing by eye"),e(Je))};var K,Y,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`function Simplenotest() {
  const [cols, setColumns] = useState(getDummyCols);
  const onColumnResize = useCallback((col: GridColumn, newSize: number) => {
    const index = cols.indexOf(col);
    const newCols = [...cols];
    newCols[index] = {
      ...newCols[index],
      width: newSize
    };
    setColumns(newCols);
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyData} getCellsForSelection={true} columns={cols} rows={1000} onColumnResize={onColumnResize} />;
}`,...(X=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var L,j,P;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`function RelationColumn() {
  const [cols, setColumns] = useState(getDummyRelationColumn);
  const onColumnResize = useCallback((col: GridColumn, newSize: number) => {
    const index = cols.indexOf(col);
    const newCols = [...cols];
    newCols[index] = {
      ...newCols[index],
      width: newSize
    };
    setColumns(newCols);
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyRelationData} columns={cols} rows={1000} onColumnResize={onColumnResize} smoothScrollX={true} smoothScrollY={true} />;
}`,...(P=(j=b.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var q,F,U;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`function Minimal() {
  return <DataEditor width="100%" getCellContent={getData} columns={columns} rows={1000} />;
}`,...(U=(F=v.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var W,J,Q;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`function Smooth() {
  const [cols, setCols] = useState(getDummyCols);
  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    const index = cols.indexOf(column);
    if (index !== -1) {
      const newCol: GridColumn = {
        ...column,
        width: newSize
      };
      const newCols = [...cols];
      newCols.splice(index, 1, newCol);
      setCols(newCols);
    }
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyData} onColumnResize={onColumnResize} columns={cols} rows={1000} smoothScrollY={true} smoothScrollX={true} />;
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`function ManualControl() {
  const [gridSelection, setGridSelection] = useState<GridSelection | undefined>(undefined);
  const cb = (newVal: GridSelection) => {
    if ((newVal.current?.cell[0] ?? 0) % 2 === 0) {
      setGridSelection(newVal);
    }
  };
  return <DataEditor width="100%" gridSelection={gridSelection} onGridSelectionChange={cb} getCellContent={getData} columns={columns} rows={1000} />;
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,le;G.parameters={...G.parameters,docs:{...(ne=G.parameters)==null?void 0:ne.docs,source:{originalSource:`function Draggable() {
  return <DataEditor width="100%" isDraggable={true} onDragStart={args => {
    args.setData("text", "testing");
  }} getCellContent={getData} columns={columns} rows={1000} />;
}`,...(le=(oe=G.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var re,se,ae;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`function IdealSize() {
  // trying to be 500x500
  const cols: GridColumn[] = [{
    title: "Number",
    width: 250
  }, {
    title: "Square",
    width: 250
  }];
  return <div style={{
    width: 500,
    height: 500,
    position: "relative"
  }}>
            <DataEditor width={500} height={500} isDraggable={true} onDragStart={args => {
      args.setData("text", "testing");
    }} getCellContent={getData} columns={cols} smoothScrollX={true} smoothScrollY={true} rowHeight={50} headerHeight={50} rows={9} />
        </div>;
}`,...(ae=(se=E.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,ce,de;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`function DynamicAddRemoveColumns({
  columnCount
}: {
  columnCount: number;
}) {
  // trying to be 500x500
  const cols: GridColumn[] = [{
    title: "Number",
    width: 250
  }, {
    title: "Square",
    width: 250
  }];
  for (let i = 2; i < columnCount; i++) {
    cols.push({
      title: "Foo",
      width: 250
    });
  }
  return <DataEditor width="100%" isDraggable={true} getCellContent={getData} columns={cols} smoothScrollX={true} smoothScrollY={true} rowHeight={50} headerHeight={50} rows={9} />;
}`,...(de=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,Ce;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`function GridSelectionOutOfRangeNoColumns() {
  const dummyCols = useMemo(() => getDummyCols().map(v => ({
    ...v,
    width: 300,
    title: "Making column smaller used to crash!"
  })), []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const [cols, setCols] = useState(dummyCols);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} onColumnResize={(_col, newSize) => {
    if (newSize > 300) {
      setCols(dummyCols);
    } else {
      setCols([]);
    }
  }} />;
}`,...(Ce=(me=R.parameters)==null?void 0:me.docs)==null?void 0:Ce.source}}};var ge,we,he;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`function ResizableColumns() {
  const [colSizes, setColSizes] = useState(getResizableColumnsInitSize);
  const cols = useMemo(() => {
    return getResizableColumns(colSizes);
  }, [colSizes]);
  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    setColSizes(prevColSizes => {
      return {
        ...prevColSizes,
        [column.title]: newSize
      };
    });
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={20} isDraggable={false} smoothScrollX={true} smoothScrollY={true} onColumnResize={onColumnResize} />;
}`,...(he=(we=x.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var Se,pe,fe;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`function GridSelectionOutOfRangeLessColumnsThanSelection() {
  const dummyCols = useMemo(() => getDummyCols().map(v => ({
    ...v,
    width: 300,
    title: "Making column smaller used to crash!"
  })), []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const [cols, setCols] = useState(dummyCols);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} onColumnResize={(_col, newSize) => {
    if (newSize > 300) {
      setCols(dummyCols);
    } else {
      setCols([dummyCols[0]]);
    }
  }} />;
}`,...(fe=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ye,be,ve;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`function GridAddNewRows() {
  const cols = useMemo(getDummyCols, []);
  const [rowsCount, setRowsCount] = useState(10);
  const onRowAppended = useCallback(() => {
    setRowsCount(r => r + 1);
  }, []);
  const [selected, setSelected] = useState<GridSelection | undefined>(undefined);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={rowsCount} onRowAppended={onRowAppended} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...(ve=(be=z.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var De,ke,Ge;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`function GridNoTrailingBlankRow() {
  const cols = useMemo(getDummyCols, []);
  const [selected, setSelected] = useState<GridSelection | undefined>(undefined);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={100} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...(Ge=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var Ee,Re,xe;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`function MarkdownEdits() {
  const dummyCols: GridColumn[] = useMemo(() => {
    return [{
      title: "MD short",
      width: 50
    }, {
      title: "MD long",
      width: 50
    }];
  }, []);
  const dummyCells = useCallback(([col, _row]: Item) => {
    if (col === 0) {
      const editable: EditableGridCell = {
        data: "text",
        allowOverlay: true,
        kind: GridCellKind.Markdown
      };
      return editable;
    } else if (col === 1) {
      const editable: EditableGridCell = {
        data: \`text really really really long
## H1

- this
- is
- a
- longer
- example
- to
- test
- scroll
- of
- preview
                \`,
        allowOverlay: true,
        kind: GridCellKind.Markdown
      };
      return editable;
    }
    const editable: EditableGridCell = {
      data: "text",
      allowOverlay: true,
      kind: GridCellKind.Markdown
    };
    return editable;
  }, []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={dummyCells} columns={dummyCols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...(xe=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:xe.source}}};var Oe,ze,Me;B.parameters={...B.parameters,docs:{...(Oe=B.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const [vals, setVals] = useState<[boolean | null | undefined, boolean | null | undefined]>([false, false]);
  return <DataEditor width="100%" columns={[{
    title: "Editable",
    width: 100
  }, {
    title: "Readonly",
    width: 100
  }]} rows={1} getCellContent={([col]) => {
    return {
      kind: GridCellKind.Boolean,
      readonly: col !== 0,
      allowOverlay: false,
      data: vals[col]
    };
  }} onCellEdited={([col], newVal) => {
    if (newVal.kind === GridCellKind.Boolean) {
      setVals(cv => {
        const f = [...cv];
        f.splice(col, 1, newVal.data);
        return f as [boolean, boolean];
      });
    }
  }} />;
}`,...(Me=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var Ae,Be,Ve;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [vals, setVals] = useState<[string, string][]>(() => {
    const result: [string, string][] = [];
    for (let i = 0; i < 2000; i++) {
      result.push(["Edit", "Me"]);
    }
    return result;
  });
  return <DataEditor width="100%" columns={[{
    title: "Column A",
    width: 250
  }, {
    title: "Column B",
    width: 250
  }]} rows={vals.length} getCellContent={([col, row]) => ({
    kind: GridCellKind.Text,
    allowOverlay: true,
    data: vals[row][col],
    displayData: vals[row][col]
  })} onCellEdited={([col, row], newVal) => {
    const newVals = [...vals];
    const newRow: [string, string] = [...newVals[row]];
    if (typeof newVal.data === "string") {
      newRow[col] = newVal.data;
    }
    newVals[row] = newRow;
    setVals(newVals);
  }} />;
}`,...(Ve=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Te,$e,_e;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`function GroupHeaderActionClick() {
  const cols = [{
    title: "Col1",
    width: 100,
    grow: 1,
    group: "Group"
  }];
  const [clickCount, setClickCount] = useState(0);
  return <div>
            <h3>Click count: {clickCount}</h3>
            <DataEditor width={500} height={500} rows={0} columns={cols} getCellContent={() => ({
      kind: GridCellKind.Text,
      data: "",
      displayData: "",
      allowOverlay: false
    })} getGroupDetails={name => ({
      name,
      actions: [{
        icon: "headerString",
        title: "Action",
        onClick: _e => setClickCount(c => c + 1)
      }]
    })} />
        </div>;
}`,...(_e=($e=T.parameters)==null?void 0:$e.docs)==null?void 0:_e.source}}};var Ne,He,Ie;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`function DeleteColumnsViaOnDelete() {
  const [headers, setHeaders] = useState<string[]>(["col-a", "col-b"]);
  const dynColumns: GridColumn[] = headers.map(value => ({
    id: value,
    title: value,
    width: 100
  }));
  const renderCell = React.useCallback((): GridCell => {
    return {
      kind: GridCellKind.Loading,
      allowOverlay: false
    };
  }, []);
  const addColumn = () => {
    const str = Math.random().toString(36).slice(2, 8);
    setHeaders(prev => [...prev, str]);
  };
  const removeColumns = (indices: number[]) => {
    setHeaders(prev => prev.filter((_, i) => !indices.includes(i)));
  };
  const [selection, setSelection] = useState<GridSelection | undefined>(undefined);
  const onDelete = (sel: GridSelection) => {
    if (sel.columns.length > 0) {
      setSelection(undefined);
      removeColumns(sel.columns.toArray());
      return false;
    }
    return true;
  };
  return <div style={{
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }}>
            <div style={{
      marginBottom: 8
    }}>
                <button onClick={addColumn}>Add</button>
            </div>
            <div style={{
      flex: 1,
      position: "relative"
    }}>
                <DataEditor width="100%" height="100%" columns={dynColumns} rows={0} getCellContent={renderCell} gridSelection={selection} onGridSelectionChange={setSelection} onDelete={onDelete} />
            </div>
        </div>;
}`,...(Ie=(He=$.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var Ke,Ye,Xe;_.parameters={..._.parameters,docs:{...(Ke=_.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const makeGrid = (palette: OklchStoryPalette) => {
    const getCellContent = ([col, row]: Item): GridCell => {
      const value = (row * 31 + col * 17) % 200 - 100;
      const themeOverride = col === 2 ? {
        bgCell: palette.tan
      } : value < 0 ? {
        textDark: palette.red
      } : undefined;
      return {
        kind: GridCellKind.Number,
        data: value,
        displayData: value.toString(),
        allowOverlay: false,
        themeOverride
      };
    };
    return <DataEditor width={680} height={280} initialSize={[680, 280]} columns={[{
      title: "Value A",
      width: 150
    }, {
      title: "Value B",
      width: 150
    }, {
      title: "Tan background",
      width: 150
    }, {
      title: "Value D",
      width: 150
    }]} rows={100} getCellContent={getCellContent} getRowThemeOverride={row => row % 2 === 1 ? {
      bgCell: palette.greenAlpha
    } : undefined} rowMarkers="both" theme={{
      accentColor: palette.blue,
      accentLight: palette.blueAlpha,
      textDark: palette.navy,
      borderColor: palette.navyAlpha,
      linkColor: palette.blue
    }} />;
  };
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
            <div>All colors as oklch() strings</div>
            {makeGrid(oklchPalette)}
            <div>The same colors as the sRGB values Chromium resolves them to, for comparing by eye</div>
            {makeGrid(srgbPalette)}
        </div>;
}`,...(Xe=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Xe.source}}};const dt=["Simplenotest","RelationColumn","Minimal","Smooth","ManualControl","Draggable","IdealSize","DynamicAddRemoveColumns","GridSelectionOutOfRangeNoColumns","ResizableColumns","GridSelectionOutOfRangeLessColumnsThanSelection","GridAddNewRows","GridNoTrailingBlankRow","MarkdownEdits","CanEditBoolean","SimpleEditable","GroupHeaderActionClick","DeleteColumnsViaOnDelete","OklchColors"];export{B as CanEditBoolean,$ as DeleteColumnsViaOnDelete,G as Draggable,p as DynamicAddRemoveColumns,z as GridAddNewRows,M as GridNoTrailingBlankRow,O as GridSelectionOutOfRangeLessColumnsThanSelection,R as GridSelectionOutOfRangeNoColumns,T as GroupHeaderActionClick,E as IdealSize,k as ManualControl,A as MarkdownEdits,v as Minimal,_ as OklchColors,b as RelationColumn,x as ResizableColumns,V as SimpleEditable,y as Simplenotest,D as Smooth,dt as __namedExportsOrder,ct as default};

import React, { useRef, useState } from 'react'
const CSS_INJECT = `body{margin:0;font-family:system-ui;background:#0b0f14;color:#f6f7fb}`
function Tab({id,label,active,onClick}){return <button className={'tab'+(active?' active':'')} onClick={()=>onClick(id)}>{label}</button>}
export default function App(){
  const [tab,setTab]=useState('home'); const pdfRef=useRef(); const [results,setResults]=useState([])
  return (<><style dangerouslySetInnerHTML={{__html:CSS_INJECT}}/><header><div>Sherlock</div></header>
  <main><h3>Home</h3><input type='file' ref={pdfRef}/><div>{results}</div></main></>) }
import Editor from "./Editor";
import { useState } from "react";
function App() {
  
  const [html, setHtml] = useState(``)
  const [js, setJS] = useState(``)
  const [css, setCss] = useState(``)
  
  return(
    <>
    <div className="pane top-pane"></div>
    <Editor language="xml" 
    displayName="HTML" 
    value={html} 
    onChange={setHtml} 
    />
    <Editor language="css" 
    displayName="CSS" 
    value={css} 
    onChange={setCss} 
    />
    <Editor language="javascript" 
    displayName="JavaScript" 
    value={js} 
    onChange={setJS} 
    />
    <div className="pane">
      <iframe title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
      />
    </div>
    
    </>
  )
}

export default App;

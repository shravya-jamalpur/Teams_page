import React from "react";
import universities from "./universities"

function University(){
  return (
    <div>
  {universities.map(props=><div className="university">
  <h1>{props.title}</h1>
  </div>)}
  <p style={{paddingTop:"200px",fontWeight:"bold"}}>..... and so on.</p>
  </div>
  );
}
export default University;
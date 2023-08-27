import React from "react"
import advisors from "./advisors"
function Advisor(){
    return <div>
    <h2 className="clear">Mentor and Advisors</h2>
    {advisors.map(props=>
      <div className="card" id="advisor">
      <div className="top">
        <h2 className="name">{props.name}</h2>
    <img className="circle-img" src={props.imgURL} alt="not found"/>
      
      </div>
      <div className="bottom">
      <p className="info">{props.description}</p>
        <a href="mailto:xyz@gmail.com">message now</a>
      </div>
    </div>
    )}
    </div>;
}
export default Advisor;

    
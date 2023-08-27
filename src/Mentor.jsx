import React from "react"
import mentors from "./mentors";
function Mentor(){
    return <div className="mentor">
    <h1 className="clear">Meet your Mentors</h1>
    {mentors.map(props=>
        <div className="card">
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
    </div>
    
}
export default Mentor;
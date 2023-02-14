import React from "react";
import './Demo.css';
// import MadeGoal from "./MadeGoal.js";
// import MissedGoal from "./MissedGoal.js";
const Demo = (props) => {
    // const y = false;
    // if(y)
    // {
    //     return <MadeGoal />
    // }
    // else{
    //     return <MissedGoal />
    // }
    const a = 100;
    const handleClick = (x,y) => {
        alert(x+y);
    };
    
return(
    <div>
        <div><h3>New Component ,{props.para}</h3></div>
        {a === 10 && <h4>{props.para}</h4>}
        <button className="bt" onClick={() => handleClick(90,10)}>Click Me</button>
    </div>);
};

export default Demo;
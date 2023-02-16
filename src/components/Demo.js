import React from "react";
import './Demo.css';
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";
const Demo = (props) => {
    const cars=["ford","BMW","soka","Benz","Lamb"];
    // const y = false;
    // if(y)
    // {
    //     return <MadeGoal />
    // }
    // else{
    //     return <MissedGoal />
    // }
    var name;
    const passwordRegex=/([A-Za-z])/
    const a = 0;
    const handleClick = (x,y) => {
        alert(x+y);
    };
    const handleNameChange = (event)=>{
        name=event.target.value;
    };
    const handlePass = (event)=>{
        if(passwordRegex.test(event.target.value))
        {
            console.log("Match");
        }
        else {
            console.log("Not match")
        }
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(name);
    };
    
return(
    <div>
        <div><h3>New Component ,{props.para}</h3></div>
        {/* {a === 10 && <h4>{props.para}</h4>} */}
        {a>=10?<MadeGoal/>:<MissedGoal/>}
        <button className="bt" onClick={() => handleClick(90,10)}>Click Me</button>
        <h2>New Components</h2>
        <ol>
            {cars.map((car,i)=>(
                <li key={i}>{car}</li>
            ))}
        </ol>

        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="la" onChange={handleNameChange} />
            <label>Password:</label>
            <input type="password"onChange={handlePass}/>
            <input type="submit"/>
        </form>
    </div>);
};

export default Demo;
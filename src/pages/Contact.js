import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
const Contact = () => {
    const [isData, setIsData]=useState("Hello ");
    const [count, setcount]=useState(0);
    
    useEffect (()=>{
        const interval=setInterval(() => {
            setcount((count)=>count+1);
        },1000);
        return () => clearInterval(interval);
    }, []);
    const handleChange =  () =>
    {
        setIsData("Papa ki Paria");
    };
    const myStyle = {
        color: "#000",
        backgroundColor: "#efff0d",
    };
    return (
        <div>
            <h1 style={myStyle}> Contact Page</h1>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/about">About</Link>
            <br></br>
            <p>{isData}</p>
            <p>{count}</p>
            <button onClick={handleChange}>Change</button>
        </div>);
};

export default Contact;
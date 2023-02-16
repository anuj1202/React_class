import React from "react";
import {Link} from "react-router-dom";
const About = () => {
    return (
        <div>
            <h1 style={{ color: "white", backgroundColor: "blueviolet"}}>About Page</h1>
            <Link to="/contact">Contact</Link>
            <br></br>
            <Link to="/">Home</Link>
            <br></br>
        </div>);
};

export default About;
import React from "react";
import {Link} from "react-router-dom";
const Contact = () => {
    return (
        <div>
            <h1> Contact Page</h1>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/about">About</Link>
            <br></br>
        </div>);
};

export default Contact;
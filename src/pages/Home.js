import React from "react";
import { Link } from "react-router-dom";
import ct from "./style.module.css";
const Home = () => {
    return (
        <div>
            <h1 className={ct.body}>Home Page</h1>
            <Link to="/contact">Contact</Link>
            <br></br>
            <Link to="/about">About</Link>
            <br></br>
            

        </div>);
};

export default Home;
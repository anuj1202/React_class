import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/contact">Contact</Link>
            <br></br>
            <Link to="/about">About</Link>
            <br></br>
            

        </div>);
};

export default Home;
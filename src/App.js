import './App.css';
import React from "react";
// import Demo from "./components/Demo.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  // var x=10;
  // var text;
  // if(x===10)
  // {
  //   text="Equal";
  // }
  // else {
  //   text="Not equal to";
  // }

  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      <p>{39/0.6}</p>
      <input className="demo" type="text" />
      <h4>{text}</h4>
      <h3>{x >= 10? "x is greater than or equal to 10":"No Match"}</h3>
      <Demo  para={x} /> */}
      {/*  Multiple css : <h1 className:{`${classes.body} demo`}> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

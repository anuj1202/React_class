import './App.css';
import React from "react";
import Demo from "./components/Demo.js";

function App() {
  var x=10;
  var text;
  if(x===10)
  {
    text="Equal";
  }
  else {
    text="Not equal to";
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{39/0.6}</p>
      <input className="demo" type="text" />
      <h4>{text}</h4>
      <h3>{x >= 10? "x is greater than or equal to 10":"No Match"}</h3>
      <Demo  para={x} />
      
    </div>
  );
}

export default App;

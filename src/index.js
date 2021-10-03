import React from "react";
import ReactDOM from "react-dom";

const fName = "Jose";
const lName = "V Sebastian";
const luckyNumber = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);

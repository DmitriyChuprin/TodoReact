import React from "react";
import ReactDOM from "react-dom";

const el = (
  <div>
    <h1>My TODO List</h1>
    <input placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
      <li>Go to sleep</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById("root"));

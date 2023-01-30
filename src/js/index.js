//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";

let counter = 0;

setInterval(() => {
    counter++;
    ReactDOM.render(<SimpleCounter number={counter}/>, document.querySelector("#app"));

}, 1000);

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));

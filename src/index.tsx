import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import FoodMenu from "./pages/FoodMenu";

ReactDOM.render(
  <React.StrictMode>
    <FoodMenu />
  </React.StrictMode>,
  document.getElementById("root")
);

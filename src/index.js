import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import CardList from "./CardList";
import "tachyons";
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App robots={robots} />
  </React.StrictMode>
);

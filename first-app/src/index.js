import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Welcome from "./Welcome";
import Addition from "./Addition";
import { List, Heading } from "./List";
import Welcome2 from "./welcome2";
import Counter from "./Counter";
import ChangeImage from "./ChangeImage";
import Toggle from "./OnOff";
import ColorChange from "./ColorChange";
import EvenOrOdd from "./Number";
import Favfood from "./Foods";
import ColorTemplate from "./ColorChange2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <Welcome />
    <Heading />
    <List />
    <Welcome2 />
    <Counter />
    <Addition />
    <ChangeImage />
    <Toggle />
    <ColorChange />
    <EvenOrOdd />
    <Favfood /> */}

    <ColorTemplate />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

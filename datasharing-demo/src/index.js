import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./users";
import FetchProduct from "./UseEffects/fetchProduct";
import UseRefDemo from "./useRef/UseRefDemo";
import UseRefDemo2 from "./useRef/UseRefDemo2";
import UseRefDemo3 from "./useRef/UseRefDemo3";
import UseRefDemo4 from "./useRef/UseRefDemo4";
import TourAPI from "./UseEffects/TourAPI";
import BookForm from "./FormDemo/BookForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Users /> */}
    {/* <FetchProduct /> */}
    {/* <UseRefDemo/> */}
    {/* <UseRefDemo2 /> */}
    {/* <UseRefDemo4 /> */}
    {/* <TourAPI/> */}
    <BookForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

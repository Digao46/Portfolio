import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/scss/globals.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "reactstrap";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

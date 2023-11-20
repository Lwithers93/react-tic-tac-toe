import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Game from "./App.js";
import BrowserRouter from "react-router-dom/BrowserRouter";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Game />
  </BrowserRouter>
);

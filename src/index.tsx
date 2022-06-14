import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import InitialRouter from "./views";
import { RecoilRoot } from "recoil";
import initReactFastclick from "react-fastclick";
import "./index.css";

initReactFastclick();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <InitialRouter />
    </BrowserRouter>
  </RecoilRoot>
);

reportWebVitals();

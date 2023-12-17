import React from "react";
import {createRoot} from "react-dom/client";

import "./assets/styles/global.css";
import App from "./App";


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
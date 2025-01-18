import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Routes.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

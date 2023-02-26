import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContextProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);

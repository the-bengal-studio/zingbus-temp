import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CityContextProvider from "./Context/Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CityContextProvider>
      <App />
    </CityContextProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from ReactDOM
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Pass a function to log web vitals
reportWebVitals();

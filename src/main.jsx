import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextPopUp } from "./Context/Context.jsx";
import { ContextForm } from "./Context/ContextForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextForm>
        <ContextPopUp>
          <App />
        </ContextPopUp>
      </ContextForm>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./components/molecules";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./components/contexted/App/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App></App>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();

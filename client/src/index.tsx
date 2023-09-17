import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Providers from "Providers";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

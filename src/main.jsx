import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageThemeProvider } from "./context/LanguageThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageThemeProvider>
      <App />
    </LanguageThemeProvider>
  </React.StrictMode>,
);

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Не забудь імпортувати BrowserRouter
import App from "./components/App/App";
import "./index.css";
import React from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Створення кореня
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

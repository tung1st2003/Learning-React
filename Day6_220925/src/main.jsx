import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseState from "./ex_useState.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseState />
  </StrictMode>
);

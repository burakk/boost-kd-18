

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";


import App from "./App";

import "../src/assets/reset.css";

import "./index.css";

const rootEl = document.getElementById("root");

const root = createRoot(rootEl);

root.render(
    <StrictMode>
        <App />
    </StrictMode>

);



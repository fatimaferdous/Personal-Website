import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";

import App from './App.tsx'
import Software from "./pages/Software";
import Research from "./pages/Research";
import WebUxUi from "./pages/WebUxUi";

import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/software" element={<Software />} />
        <Route path="/research" element={<Research />} />
        <Route path="/web-ux-ui" element={<WebUxUi />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
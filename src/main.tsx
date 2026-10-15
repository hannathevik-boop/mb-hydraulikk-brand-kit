import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
// @ts-ignore
import "./styles/index.css";
import App from "./app/App";
import { IconPageLayout } from "./app/components/IconPageLayout";
import { ICON_PAGE_PATH } from "./app/components/BrandKitHeader";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={ICON_PAGE_PATH} element={<IconPageLayout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

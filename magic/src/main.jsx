import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Cards from "./pages/Cards";

import Search from "./pages/Search";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cards" element={<Cards />}></Route>

          <Route path="search" element={<Search />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

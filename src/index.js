import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SightingsList from "./Components/SightingsList";
import "bootstrap/dist/css/bootstrap.min.css";
import SightingByIndex from "./Components/SightingByIndex";
import SightingFilter from "./Components/SightingFilter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<SightingsList />} />
      <Route path="/sightings/:sightingIndex" element={<SightingByIndex />} />
      <Route path="/sightings/filter" element={<SightingFilter />} />
    </Routes>
  </BrowserRouter>
);

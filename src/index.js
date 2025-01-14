import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SightingsList from "./Components/SightingsList";
import "bootstrap/dist/css/bootstrap.min.css";
import SightingByIndex from "./Components/SightingByIndex";
import SightingFilter from "./Components/SightingsFilter";
import NewSighting from "./Components/NewSighting";
import CommentsList from "./Components/CommentsList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<SightingsList />} />
      <Route path="/sightings/:sightingIndex" element={<SightingByIndex />} />
      <Route
        path="/sightings/:sightingIndex/comments"
        element={<SightingByIndex />}
      />
      <Route path="/sightings/filter" element={<SightingFilter />} />
      <Route path="/new" element={<NewSighting />} />
    </Routes>
  </BrowserRouter>
);

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constant";
import SightingsListPanel from "./SightingsListPanel";
import { Link } from "react-router-dom";

export default function SightingsList() {
  const [sightings, setSightings] = useState();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sightings`).then((res) => {
      setSightings(res.data);
    });
  }, []);

  const sightingsViewList = sightings
    ? sightings.map((sighting) => {
        return (
          <Link to={`/sightings/${sighting.id}`} key={sighting.id}>
            <SightingsListPanel data={sighting} />
          </Link>
        );
      })
    : null;

  return (
    <div>
      <h1>BIGFoot Sightings List:</h1>
      <h1>Testint Circle Circle</h1>
      <Link to="/sightings/filter">Filter</Link>{" "}
      <Link to="/new">Post Sighting</Link>
      <div>{sightingsViewList}</div>
    </div>
  );
}

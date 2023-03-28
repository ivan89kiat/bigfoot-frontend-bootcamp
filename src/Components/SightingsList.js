import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constant";
import SightingsListPanel from "./SightingsListPanel";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function SightingsList() {
  const [sightings, setSightings] = useState();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sightings`).then((res) => {
      setSightings(res.data);
    });
  }, []);

  const sightingsViewList = sightings
    ? sightings.map((sighting, index) => {
        return (
          <Link to={`/sightings/${index}`} key={index}>
            <SightingsListPanel data={sighting} />
          </Link>
        );
      })
    : null;

  return (
    <div>
      <h1>BIGFoot Sightings List:</h1>
      <Link to="/sightings/filter">Filter</Link>
      <Card>{sightingsViewList}</Card>
    </div>
  );
}

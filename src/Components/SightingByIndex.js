import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BACKEND_URL } from "../constant";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function SightingByIndex() {
  const [sightingIndex, setSightingIndex] = useState();
  const [sighting, setSighting] = useState();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sightings/${sightingIndex}`).then((res) => {
      setSighting(res.data);
    });
  }, [sightingIndex]);

  const urlParam = useParams();

  if (sightingIndex !== urlParam.sightingIndex) {
    setSightingIndex(urlParam.sightingIndex);
  }

  const sightingInfo = [];

  if (sighting) {
    for (const key in sighting) {
      sightingInfo.push(
        <Card.Text key={key}>
          {key}:{sighting[key]}
        </Card.Text>
      );
    }
  }

  return (
    <div>
      <Link to={"/"}>HOME</Link>
      <Card>
        <Card.Body>
          <Card.Title>
            {sighting &&
              `${sighting.COUNTY} ${sighting.YEAR} ${sighting.SEASON}`}{" "}
            {""}
            {sighting && sighting.MONTH}
          </Card.Title>
          {sightingInfo}
        </Card.Body>
      </Card>
    </div>
  );
}

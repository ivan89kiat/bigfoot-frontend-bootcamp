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

  const sightingInfo = sighting ? (
    <Card key={sighting.id}>
      <Card.Body>
        <Card.Title>
          Date: {sighting.date}
          <br />
          Location: {sighting.location}
        </Card.Title>
        <Card.Text>Notes: {sighting.notes}</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    `No Data`
  );

  console.log(sightingInfo);
  return (
    <div>
      <Link to={"/"}>HOME</Link>
      {sightingInfo}
    </div>
  );
}

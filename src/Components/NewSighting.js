import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BACKEND_URL } from "../constant";
import { useNavigate } from "react-router-dom";

export default function NewSighting() {
  const navigate = useNavigate();
  const [sightingInfo, setSightingInfo] = useState([
    {
      date: "",
      location: "",
      notes: "",
    },
  ]);

  const handleCalendarChange = (date) => {
    const selectedDate = date.toDateString();
    setSightingInfo({ date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BACKEND_URL}/sightings`, sightingInfo)
      .then((res) => {
        setSightingInfo([
          {
            date: "",
            location: "",
            notes: "",
          },
        ]);
      })
      .then(navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sightingForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Date of Sighting:</Form.Label>
          <div className="calendar-container">
            <Calendar
              onChange={handleCalendarChange}
              value={sightingInfo.date}
            />
          </div>
          <div className="text-center">Selected date: {sightingInfo.date}</div>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Location of Sighting:</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={sightingInfo.location}
            placeholder="Woodlands, Singapore"
            onChange={(e) =>
              setSightingInfo({ ...sightingInfo, location: e.target.value })
            }
          />
        </Form.Group>
        <br />
        <Form.Label>Sighting Description:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={sightingInfo.notes}
          onChange={(e) =>
            setSightingInfo({ ...sightingInfo, notes: e.target.value })
          }
        />
        <br />
        <Button type="submit" value="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

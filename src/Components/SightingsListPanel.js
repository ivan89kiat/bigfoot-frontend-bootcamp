import React from "react";
import Card from "react-bootstrap/Card";

const SightingsListPanel = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Date: {props.data.date}
          <br />
          Location: {props.data.location}
        </Card.Title>
        <Card.Text>Notes: {props.data.notes}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SightingsListPanel;

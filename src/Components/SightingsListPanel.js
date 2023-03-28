import React from "react";
import Card from "react-bootstrap/Card";

const SightingsListPanel = (props) => {
  return (
    <Card.Body>
      <Card.Title>
        {props.data.COUNTY}
        {props.data.YEAR} {props.data.SEASON} {props.data.MONTH}
      </Card.Title>
    </Card.Body>
  );
};
export default SightingsListPanel;

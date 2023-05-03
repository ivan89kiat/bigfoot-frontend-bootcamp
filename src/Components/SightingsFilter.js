import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseButton from "react-bootstrap/esm/CloseButton";
import { useNavigate } from "react-router";

export default function SightingFilter() {
  const navigate = useNavigate();

  return (
    <div>
      <Offcanvas show={true} className="offcanvas">
        <Offcanvas.Header>
          <Offcanvas.Title>Filter</Offcanvas.Title>
          <CloseButton
            onClick={() => {
              navigate("/");
            }}
          ></CloseButton>
        </Offcanvas.Header>
        <Offcanvas.Body>Options:</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

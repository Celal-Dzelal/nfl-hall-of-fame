import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MyHeader = () => {
  return (
    <Container>
      <Navbar expand="lg" className="center mt-5">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <img src=".\assets\logo.png" alt="Logo" className="w-25" />
          <h1
            className="mt-3 text-primary"
            style={{ textShadow: "5px 5px 10px white" }}
          >
            Hall of Fame Legends
          </h1>
        </Container>
      </Navbar>
    </Container>
  );
};

export default MyHeader;

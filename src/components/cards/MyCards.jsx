import React, { useState } from "react";
import { Col, Button, Card, Modal } from "react-bootstrap";

const MyCards = ({ key, name, career, team, img, statistics, teams }) => {
  const [style, setStyle] = useState({});
  const onMouseEnter = () => {
    setStyle({
      boxShadow: "5px 5px 10px white", // Shadow ekliyoruz
    });
  };
  const onMouseLeave = () => {
    setStyle({
      boxShadow: "none", // Shadow'ı kaldırıyoruz
    });
  };
  const [select, setSelect] = useState(null);
  const handleSelect = (e) => {
    setSelect(e);
  };
  const closeModal = () => {
    setSelect(null);
  };

  return (
    <Col
      style={{ display: "flex", width: "18.1rem", cursor: "pointer" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card
        className="bg-secondary text-light"
        style={{ width: "18rem", transition: "box-shadow 0.3s ease", ...style }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            width: "100%",
            height: "10rem",
          }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{career}</Card.Text>
          <Card.Text>{team}</Card.Text>
          <Button variant="danger" onClick={handleSelect}>
            More Information
          </Button>
        </Card.Body>
      </Card>
      {select && (
        <Modal show={!!select} onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {teams.map((item) => (
                <h4>{item}</h4>
              ))}
            </div>
            <ul>
              {Object.entries(statistics).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              {/*//! Modalı kapatmak için closeModal çalıştırılır. */}
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Col>
  );
};

export default MyCards;

import React, { useState } from "react";
import MyCards from "./MyCards";
import { Container, Row, InputGroup, Form } from "react-bootstrap";
import { hallOfFamePlayers } from "../../helpers/data";

const CardsContainer = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = hallOfFamePlayers.filter((player) =>
    player.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="d-flex flex-column align-items-center">
      <InputGroup className="mb-3 w-75 ">
        <InputGroup.Text id="inputGroup-sizing-default">SEARCH</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleSearch}
        />
      </InputGroup>
      <Container className="p-3 my-3">
        <Row
          xs={2}
          md={4}
          lg={6}
          className="justify-content-center g-3 text-center"
        >
          {filteredData.map((player) => (
            <MyCards
              key={player.id}
              name={player.name}
              career={player.yearsActive}
              team={player.team}
              img={player.photoUrl}
              statistics={player.statistics}
              teams={player.teamsPlayed}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardsContainer;

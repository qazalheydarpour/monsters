import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { MonstersCard } from "./MonstersCard";
import {Link} from 'react-router-dom'
import { Outlet } from "react-router";

export const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [filter, setFilter] = useState("");
  const getMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsterList(data));
  };
  useEffect(() => {
    document.title = "Monster List";
    getMonsters();
  }, []);

  return (
    <Container className="mt-3">
      <Row className="mt-3">
        <Outlet/>
        <Col style={{ marginTop:'20px'}}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Monster name"
              aria-label="Monster name"
              onChange={(e) => setFilter(e.target.value)}
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">SEARCH</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        {monsterList
          .filter((monster) =>
            monster.name.toLowerCase().includes(filter.toLowerCase())
          ).length===0? <h1>empty list</h1>:
          monsterList
          .filter((monster) =>
            monster.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((monster) => (
            // 12 az 12
            <Col className="mt-3" key={monster.id} xs={12} sm={6} md={4} xl={3}>
              <Link to= {`/monster/${monster.id}`}>
              <MonstersCard
                name={monster.name}
                description={monster.email}
                img={"https://robohash.org/qazal" + monster.username}
              />
              </Link>
              
            </Col>
          ))}
      </Row>
    </Container>
  );
};

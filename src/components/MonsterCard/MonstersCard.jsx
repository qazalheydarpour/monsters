import React, { Component } from "react";
import {Card} from 'react-bootstrap'
export const MonstersCard = ({name='',description='',img=''}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

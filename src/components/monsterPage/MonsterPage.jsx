import React from 'react'
import {Link} from 'react-router-dom'
import {Card , Button} from 'react-bootstrap'
import { useEffect, useState ,useCallback } from "react";
import { useParams } from 'react-router';

export const MonsterPage = () => {
    const params = useParams();
    const [monster,setMonster] = useState({
        id: 2,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })
    const getMonsters = useCallback(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterID}`)
          .then((response) => response.json())
          .then((data) => setMonster(data));
      },[params.monsterID]);
      useEffect(() => {
        getMonsters();
      }, [getMonsters]);
      
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Monster Card</Card.Header>
                <Card.Body>
                <img style={{
                    width : '20%',
                    marginBottom: '5px',
                    borderRadius : '100%',
                    border : '1px solid black'
                }} 
                src={"https://robohash.org/qazal" + monster.username}/>
                    <Card.Title> {monster.name}</Card.Title>
                    <Card.Text> {monster.username} </Card.Text>
                    <Card.Text> {monster.email} </Card.Text>
                    <Card.Text> {monster.phone} </Card.Text>
                    <Card.Text> {monster.website}</Card.Text>
                    <Link to='/'>
                        <Button variant="primary">back to home page</Button>
                        </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

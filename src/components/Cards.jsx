import React from 'react'
import {Card, CardGroup, Button} from "react-bootstrap";

function Cards(props) {
    const post = props.users.map((user)=>{return(
      <Card className={"card-grid"} style={{ width: '18rem' }}>
        <Card.Img className='productImage' key={user.id} variant="top" src={user.image}/>
        <Card.Body>
          <Card.Title key={user.id}>{user.title}</Card.Title>
          <Card.Text key={user.id}>{user.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    )})
    return (
      <div>
        {post}
      </div>
  )
}

export default Cards

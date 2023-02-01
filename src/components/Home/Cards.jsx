import React from 'react'
import { useState } from 'react';
import {Card, Button} from "react-bootstrap";
import './Cards.css';

function Cards(prop) {
  const MAX_LENGTH = 100;
  const [count,setCount] = useState(0)
  const addCount=(id)=>{
    const newCount = prop.users.map((items)=>
      items.id === id ?count+1 : count
    )
    setCount(newCount)
  }

    const post = prop.users.map((user)=>{return(
      <div className='d-inline-flex' key={user.id}>
        <Card className='cardLay m-2 p-2'>
          <Card.Img className='productImage' variant="top" src={user.image}/>
          <Card.Body className=''>
            <Card.Title>{user.title}</Card.Title>
            {user.description.length > MAX_LENGTH ?
            (
            <div>
              <Card.Text> {`${user.description.substring(0, MAX_LENGTH)}...more`}</Card.Text>
          </div>
            ) :
            <p>{user.description}</p>
            }    
            <div className='user-rating' style={user.rating.rate <= 2.5  ?{background:"orange"}:{background:"green"}}>{user.rating.rate}</div>
            <div className='product-pricing'>${user.price}
            <Card.Text>{user.category}</Card.Text></div>
            <div className="counterItem">
                Qty:<button className='round-btn' onClick={()=>addCount(user.id)}>-</button>{count.qty}
                <button className='round-btn' >+</button>
            </div>            
          <Button className='position-absolute bottom-0 start-0' variant="secondary">Buy Your Product</Button>
        </Card.Body>
    </Card>
    </div>
    )})
    return (
      <div className="wrapper">
        {post}
      </div>
  )
}

export default Cards

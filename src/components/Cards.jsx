import React from 'react'
// import { useState } from 'react';
import {Card, Button} from "react-bootstrap";
import './Cards.css';

function Cards(prop) {
    const MAX_LENGTH = 100;
    // const [count,setCount] = useState(0)
    // const addCount =(id)=>{
    //   const newItem = prop.users.map((items)=>
    //     items.id === id ?{...items,qty:items.qty + 1} :items
    //   );
    //   setCount
    // };
    // const subCount =()=>{
    //     {count > 0 ? setCount(count-1) : null}
    // }

    const post = prop.users.map((user,index)=>{return(
      <div className='d-inline-flex'>
        <Card className='cardLay m-2 p-2'key={index}>
          <Card.Img className='productImage' key={index} variant="top" src={user.image}/>
          <Card.Body className=''>
            <Card.Title key={index}>{user.title}</Card.Title>
            {user.description.length > MAX_LENGTH ?
            (
            <div>
              <Card.Text key={index}> {`${user.description.substring(0, MAX_LENGTH)}...more`}</Card.Text>
          </div>
            ) :
            <p>{user.description}</p>
            }    
            <div className='user-rating' style={user.rating.rate <= 2.5  ?{background:"orange"}:{background:"green"}} key={index}>{user.rating.rate}</div>
            <div className='product-pricing' key={index}>${user.price}</div>
            {/* <div className="counterItem">
              <button className='roundBtn' onClick={addCount}>+</button>
              <label>Numbers{count}</label>
              <button className='roundBtn' onClick={subCount}>-</button>
            </div> */}
          <Button className='position-absolute bottom-0 start-0' key={index} variant="secondary">Buy Your Product</Button>
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

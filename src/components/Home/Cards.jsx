import React from 'react'
import { useState } from 'react';
import {Card, Button} from "react-bootstrap";
import './Cards.css';


function Cards(prop) {
  
  const MAX_LENGTH = 100;
  prop.users.forEach(users => {
    users.qty = 0;
  });


  // const [filterData, setfilterData] = useState(prop.users);
  // const addCount = (user) => {
  //   console.log(user)
  //  const selectedFilter = user.id;
  // //  console.log(selectedFilter);
  //  const filterProducts = filterData.filter((items) => {
  //    if (selectedFilter === items.id) 
  //      return items.qty + 1;
  //    else 
  //      return items.qty-1;
     
  //  })
  //  setfilterData(filterProducts);
  // }
  // console.log(filterData)
  
  const [data,setCount] = useState(prop.users);
  // useEffect(()=>
  const addCount=(user)=>{
    // console.log('here',user.qty);
      const newItem = prop.users.map((post)=> 
        post.id === user ? { ...post, qty: post.qty + 1 }: post
      // console.log('qty:',post.id)
      // ( id === post.id) ? {...post,qty:post.qty+1 }: null 
        // id === post.id ?{123 : post } : post
   
      )
      setCount(newItem);
  }
  
  
  
    const post = prop.users.map((user)=>{return(
      <div className='d-inline-flex' key={user.id}>
        <Card className='cardLay m-2 p-2'>
          <Card.Img className='productImage' variant="top" src={user.image}/>
          <Card.Body>
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
                Qty:<button className='round-btn' onClick={()=>addCount(user.id)}>-</button>{data}
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
        {addCount}
      </div>
  )
}

export default Cards

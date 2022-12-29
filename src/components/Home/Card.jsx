import React from 'react'
import { useState } from 'react';
import {Button,Card as Bcard} from "react-bootstrap";
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd} from "@fortawesome/free-solid-svg-icons"
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons"
import Popup from 'reactjs-popup';
// import { useEffect } from 'react';

function Card(data) {
  const newData = data.data;
  console.log(newData);
  const [count,setCount] = useState(1);
  const [total, setTotal] = useState(newData.price);
  const addCount = () => {
    setCount(count => newData.qty = count + 1);
    setTotal(totalprice => totalprice =  newData.qty * newData.price);
  };
  const decCount = () => {
    setCount(count => count > 1 ? newData.qty = count - 1 : 1);
    setTotal(totalprice => totalprice =  newData.qty * newData.price);
  }
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  return(
      <div className='d-inline-flex'>
        <Bcard className='cardLay m-2 p-2'>
          <Bcard.Img className='productImage' variant="top" src={newData.image}/>
          <Bcard.Body>
            <Bcard.Title>{newData.title}</Bcard.Title>
            <Bcard.Text className='data-dis'> {newData.description}</Bcard.Text>
            <Popup trigger={<button className='more-button' onClick={handleClick}>{active ? "More..." : "Less"}</button>} position="bottom">{newData.description}</Popup>
            {newData.rating.rate && <div className='user-rating' style={newData.rating.rate <= 2.5  ?{background:"orange"}:{background:"green"}}>{newData.rating.rate}</div>}
            <div className='product-pricing'>${newData.price}
            <Bcard.Text>{newData.category}</Bcard.Text></div>
            <div className="counterItem">
                Qty:<button className='round-btn'  onClick={decCount}><FontAwesomeIcon className='text-secondary' icon={faMinusCircle}></FontAwesomeIcon></button>
                <span className='count-text'>{count}</span>
                <button className='round-btn' onClick={addCount}><FontAwesomeIcon className='text-secondary' icon={faAdd}></FontAwesomeIcon></button>
                <h1>Total:${total.toFixed(2)}</h1>
            </div>            
          <Button className='position-absolute bottom-0 start-0' variant="secondary">Buy Your Product</Button>
        </Bcard.Body>
        </Bcard>
    </div>
  )
}

export default Card

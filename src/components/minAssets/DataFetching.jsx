import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from "../Home/Card"

const DataFetching = () => {
const [users, setUsers] = useState([]);
const getUsers =() => {
            axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setUsers(response.data)
            });
    };
    useEffect(() => {
        getUsers();
    }, []);
    users.forEach(users => {
        users.qty = 0;
    });
    const post = users.map((user)=>{
        return <Card key={user.id} data={user}/>
    })
    return (
        <>
            {post}
        </>
    )
}

export default DataFetching

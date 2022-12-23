import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import axios from "axios";

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
    return (
        <>
            <Cards users={users}/>
        </>
    )
}

export default DataFetching

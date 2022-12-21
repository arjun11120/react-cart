import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import Loading from './Loading';

const DataFetching = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Cards users={users}/>
        </>
    )
}

export default DataFetching

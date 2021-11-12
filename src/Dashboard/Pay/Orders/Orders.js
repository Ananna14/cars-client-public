import React, { useEffect } from 'react'
import UseFirebase from '../../../Hooks/UseFirebase'

const Orders = () => {
    const {user} = UseFirebase();

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[user?.email])
    return (
        <div>
            <h2>Order page</h2>
        </div>
    )
}

export default Orders

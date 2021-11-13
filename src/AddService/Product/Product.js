import React, { useEffect, useState } from 'react'

const Product = () => {
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/allOrder`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className="review-addeed">
            <h2>Manage product page</h2>
            <h3>All Orders {orders.length}</h3>
        </div>
    )
}

export default Product

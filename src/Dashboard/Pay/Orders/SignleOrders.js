import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleOrders.css'

const SignleOrders = ({product}) => {
    const {name, email, _id} = product;
    const [control, setControl] = useState(false)
    const [products, setProducts] = useState([])
    
    // useEffect(()=>{
    //     fetch(`https://limitless-reef-15821.herokuapp.com/myOrder/${email}`)
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[control])

    const handleDelete = (id) =>{
 fetch(`https://limitless-reef-15821.herokuapp.com/deleteOrder/${id}`,{
     method: "DELETE",
 },[control])
 .then((res) => res.json())
 .then((data)=> {
     if(data.deleteCount){
         setControl(!control)
     }
 });
 console.log(id)
    }

    return (
        <div  className="half-width">
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Car Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.email}</td>
                        <button onClick={()=>handleDelete(product?._id)} className="btn-added">cancle</button>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default SignleOrders

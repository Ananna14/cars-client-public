import React from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleOrders.css'

const SignleOrders = ({product}) => {
    const {name, email} = product;
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
                        <button className="btn-added">cancle</button>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default SignleOrders

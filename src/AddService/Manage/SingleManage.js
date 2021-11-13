import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const SingleManage = ({product}) => {
    const {img, name, price, description} = product;
    const [control, setControl] = useState(false)


    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/deleteOrder/${id}`,{
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
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>service Title</th>
                        <th>aervice description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.img}</td>
                        <td>{product.status}</td>
                        <button onClick={()=>handleDelete(product?._id)}>Delete</button>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default SingleManage

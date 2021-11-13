import React from 'react'
import { Table } from 'react-bootstrap';

const SingleManage = ({product}) => {
    const {img, name, price, description} = product;
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>service Title</th>
                        <th>aervice description</th>
                        <th>Image Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.img}</td>
                        <button>Delete</button>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default SingleManage

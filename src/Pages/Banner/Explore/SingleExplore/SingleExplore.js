import React from 'react'
import { Link } from 'react-router-dom';
import './SingleExplore.css'

const SingleExplore = ({product}) => {
    const {img, name, price, description} = product;
    return (
        <div className="half-width">
             <img className="img-added" src={img} alt="" />
           <h1>{price}</h1>
           <h2>{name}</h2>
           <p>{description}</p>
           <Link to="/purchase"><button className="btn-color">Buy Now</button></Link>
        </div>
    )
}

export default SingleExplore

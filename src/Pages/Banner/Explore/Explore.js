import React, { useEffect, useState } from 'react'
import SingleExplore from './SingleExplore/SingleExplore'
import './Explore.css'

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container">
           {
                products.map(product=><SingleExplore
                    key={product.price}
                    product={product}
                ></SingleExplore>)
            }
        </div>
    )
}

export default Explore

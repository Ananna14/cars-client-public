import React, { useEffect, useState } from 'react'
import SingleExplore from './SingleExplore/SingleExplore'
import './Explore.css'

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://limitless-reef-15821.herokuapp.com/services')
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

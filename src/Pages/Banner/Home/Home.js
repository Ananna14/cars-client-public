import React, { useEffect, useState } from 'react'
import SingleHome from './SingleHome/SingleHome'
import './Home.css'

const Home = () => {
   const [products, setProducts] = useState([])

   useEffect(()=>{
       fetch('https://limitless-reef-15821.herokuapp.com/services')
       .then(res => res.json())
       .then(data => setProducts(data))
   },[])
    return (
        <div className="container">
            {
                products.slice(0,6).map(product=><SingleHome 
                    key={product.price}
                    product={product}
                    ></SingleHome>)
            }
        </div>
    )
}

export default Home

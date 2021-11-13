import React, { useEffect, useState } from 'react'
import SingleManage from './SingleManage'
// import React, { useEffect, useState } from 'react'

const Manage = () => {
    const [products, setProducts] = useState([])
    const [control] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[control])

    
    return (
        <div className="review-addeed">
            <h2>Manage All Orders</h2>
            {
                products.map(product=><SingleManage
                    key={product.price}
                    product={product}
                    ></SingleManage>)
            }
        </div>
    )
}

export default Manage


import  { useEffect, useState } from 'react';
import UseFirebase from '../../../Hooks/UseFirebase'
import SingleOrders from '../../Pay/Orders/SignleOrders'

const Orders = () => {
    const {user} = UseFirebase();
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[user?.email])
  

    
    return (
        <div>
            <h2>Order Page</h2>
            <div className="container">
            {
                products.slice(0,6).map(product=><SingleOrders
                    key={product.price}
                    product={product}
                    ></SingleOrders>)
            }
        </div>
        </div>
    )
}

export default Orders

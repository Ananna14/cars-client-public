
import  { useEffect, useState } from 'react';
import UseFirebase from '../../../Hooks/UseFirebase'
import SingleOrders from '../../Pay/Orders/SignleOrders'

const Orders = () => {
    const {user} = UseFirebase();
    const [products, setProducts] = useState([])
    const [control] = useState(false)

    useEffect(()=>{
        fetch(`https://limitless-reef-15821.herokuapp.com/myOrder/${user?.email}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[user?.email, control])
  

    
    return (
        <div>
            <h2>Order Page</h2>
            <div className="container">
            {
                products.map(product=><SingleOrders
                    key={product.price}
                    product={product}
                    ></SingleOrders>)
            }
        </div>
        </div>
    )
}

export default Orders

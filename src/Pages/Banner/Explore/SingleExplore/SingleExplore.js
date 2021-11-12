
import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';
import './SingleExplore.css'

const SingleExplore = ({product}) => {
    const {img, name, price, description, _id} = product;
   
    
    return (
        <div className="half-width">
             <img className="img-added" src={img} alt="" />
           <h1>{price}</h1>
           <h2>{name}</h2>
           <p>{description}</p>
           <Link to={`/purchase/${_id}`}>
           <button className="btn-color">Buy Now</button>
           </Link>
        </div>
    )
}

export default SingleExplore

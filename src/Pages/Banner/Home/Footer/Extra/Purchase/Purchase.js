import { useForm } from "react-hook-form";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Purchase.css'
import UseFirebase from "../../../../../../Hooks/UseFirebase";


const Purchase = () => {
     const {servicesId} = useParams()
    const [services, setService] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const {user} = UseFirebase()

    useEffect(()=>{
        fetch(`http://localhost:5000/singleProduct/${servicesId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    // console.log(services)

    const onSubmit = data => {
        data.email = user.email;
        console.log(data)
        fetch('http://localhost:5000/addOrders',{
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body:JSON.stringify(data)
          })
       .then(res => res.json())
       .then(result => console.log(result))
    
       console.log(data)
        }

    return (
        <div className="product">
            {/* single-product */}
            <div className="single-product">
            <h2>Purchase Page</h2>
            <img className="img" src={services?.img} alt="" />
            <h1>{services?.price}</h1>
           <h2>{services?.name}</h2>
           <p>{services?.description}</p>
           <button>Buy Now</button>
            </div>
            {/* form */}
           <div className="form-added">
           <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name", { required: true, maxLength: 20 })} defaultValue={services?.name} placeholder="Name"/><br/>
           <textarea {...register("description")} placeholder="Description" defaultValue={services?.description}/>
           <input type="number" {...register("price")} placeholder="Price" defaultValue={services?.price}/><br/>
           <input {...register("img")} placeholder="img-url" defaultValue={services?.img}/><br/>
           <input type="submit" />
            </form>
           </div>
        </div>
    )
}

export default Purchase

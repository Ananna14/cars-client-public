import { useForm } from "react-hook-form";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Purchase.css'
import UseFirebase from "../../../../../../Hooks/UseFirebase";


const Purchase = () => {
     const {servicesId} = useParams()
    const [bookings, setBookings] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const {user} = UseFirebase()

    useEffect(()=>{
        fetch(`http://localhost:5000/singleProduct/${servicesId}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    // console.log(services)

    const onSubmit = data => {
        data.email = user.email;
      data.status = "panding"
        fetch('http://localhost:5000/addOrders',{
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body:JSON.stringify(data)
          })
       .then(res => res.json())
       .then(result => console.log(result))
    //    console.log(data.email)
        }

        

    return (
        <div className="product">
            {/* single-product */}
            <div className="single-product">
            <h2>Purchase Page</h2>
            <img className="img" src={bookings?.img} alt="" />
            <h1>{bookings?.price}</h1>
           <h2>{bookings?.name}</h2>
           <p>{bookings?.description}</p>
           <button>Buy Now</button>
            </div>
            {/* form */}
           <div className="form-added">
           <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name", { required: true, maxLength: 20 })} defaultValue={bookings?.name} placeholder="Name"/><br/>
           <textarea {...register("description")} placeholder="Description" defaultValue={bookings?.description}/>
           <input type="number" {...register("price")} placeholder="Price" defaultValue={bookings?.price}/><br/>
           <input {...register("img")} placeholder="img-url" defaultValue={bookings?.img}/><br/>
           <input type="submit" />
            </form>
           </div>
        </div>
    )
}

export default Purchase

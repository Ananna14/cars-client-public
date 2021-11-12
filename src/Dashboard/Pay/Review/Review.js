import React from 'react'
import { useForm } from "react-hook-form";
import UseFirebase from '../../../Hooks/UseFirebase';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = UseFirebase()

  const onSubmit = data => {
    fetch('http://localhost:5000/addSReview',{
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
   .then(res => res.json())
   .then(result => console.log(result))

   console.log(data)
  };
    return (
        <div className="review-addeed">
            <h2>Please Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true, maxLength: 20 })} value={user?.email} placeholder="email"/>
      <textarea {...register("comment")} placeholder="comment"/>
      <input type="submit" />
    </form>
        </div>
    )
}

export default Review

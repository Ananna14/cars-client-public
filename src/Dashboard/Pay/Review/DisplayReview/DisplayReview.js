import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './DisplayReview.css'

const DisplayReview = () => {
        const [review, setReview] = useState([]);
    
        useEffect(()=>{
            fetch('https://limitless-reef-15821.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
        },[])
        console.log(review)
    return (
        <>
        <h2>Review</h2><br/>
        <div className='show-review'>
              {
                review.map(reviews=><div className='row-gap'>
                    {
                        <div class="card border-success mb-3">
                        <div class="card-header bg-transparent border-success">Review</div>
                        <div class="card-body text-success">
                      {
                            reviews.comment
                      }
                        </div>
                        </div>
                    }
                 </div>
                )
            }
        </div>
        </>
    )
}

export default DisplayReview

import React, { useState } from 'react'

const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://limitless-reef-15821.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <div className="review-addeed">
            <h3>Make An Admin</h3>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} type="text" name="" id="" placeholder="Email"/>
                 <button>Make Admin</button>
            </form>
            {success &&<div class="alert alert-success" role="alert">
          Made Admin successfully!
          </div>}
        </div>
    )
}

export default Admin

import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useAuth from '../../../../Context/AuthProvider/useAuth'


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()

    const { user, registerUser, isLoading, authError } = useAuth();

   const handleOnBlur = e=>{
 const field = e.target.name;
 const value = e.target.value;
 const newLoginData = {...loginData};
 newLoginData[field] = value;
 console.log(newLoginData)
 setLoginData(newLoginData);
   }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your pasword did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history)
        e.preventDefault()
    }
    return (
        <div>
         <h2 className="heading-add">Please Register</h2>
         { !isLoading && <form onSubmit={handleLoginSubmit}>
         <input className="input-added" name="name" onBlur={handleOnBlur} id="" placeholder="Your Name"/><br/><br/>
         <input className="input-added" type="email" name="email" onBlur={handleOnBlur} id="" placeholder="Your Email"/><br/><br/>
         <input className="input-added" type="password" name="password" onBlur={handleOnBlur} id="" placeholder="Your Password"/><br/><br/>
         <input className="input-added" type="password" name="password2" onBlur={handleOnBlur} id="" placeholder="Retype Your Password"/><br/><br/>
         <button className="btn-color">Register</button><br/><br/>
         <Link to="/login"><h6 className="btn-add">ALREADY REGISTERED? PLEASE LOGIN</h6></Link>
         </form>}
         {/* spinner */}
         {isLoading && <div class="spinner-border m-5" role="status">
         <span class="visually-hidden">Loading...</span></div>}
         {/* alert */}
          {user?.email &&<div class="alert alert-success" role="alert">
          User created successfully!
          </div>}
          {authError && <div class="alert alert-danger" role="alert">
          {authError}
         </div>}
        </div>
    )
}

export default Register;

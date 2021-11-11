import React, { useState } from 'react'
import { Link, useLocation, useHistory} from 'react-router-dom'
import useAuth from '../../../Context/AuthProvider/useAuth'
import './Login.css' 


const Login = () => {
  const [loginData, setLoginData] = useState({})
  const {user, loginUser, isLoading, authError} = useAuth()

const location = useLocation();
const history = useHistory();

   const handleOnChange = e=>{
 const field = e.target.name;
 const value = e.target.value;
 const newLoginData = {...loginData};
 newLoginData[field] = value;
 setLoginData(newLoginData);
//  console.log(field, value)
   }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    return (
        <div>
            <h2 className="heading-add">Please Login</h2>
         <form onSubmit={handleLoginSubmit}>
         <input className="input-added" type="email" name="email" onChange={handleOnChange} id="" placeholder="Your Email"/><br/><br/>
         <input className="input-added" type="password" name="password" onChange={handleOnChange} id="" placeholder="Your Password"/><br/><br/>
         <button className="btn-color">login</button><br/><br/>
         <Link to="/register"><h6 className="btn-add">NEW USER? PLEASE REGISTER</h6></Link>
         {/* spinner */}
        {isLoading && <div class="spinner-border m-5" role="status">
         <span class="visually-hidden">Loading...</span></div>}
         {/* alert */}
          {user?.email &&<div class="alert alert-success" role="alert">
          login successfully!
          </div>}
          {authError && <div class="alert alert-danger" role="alert">
          {authError}
         </div>}
         </form>
        </div>
    )
}

export default Login

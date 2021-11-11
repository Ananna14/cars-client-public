
import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../Context/AuthProvider/useAuth'
import './Header.css'


const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className="design-added">
            <Link className="design" to="/home">Home</Link>
            <Link className="design" to="/explore">Explore</Link>
            <Link className="design" to="/purchase">purchase</Link>
            {
                user?.email ? 
                <Button onClick={logOut}>Logout</Button>
                : <Link className="design" to="/login">Login</Link>
            }
        </div>
    )
}

export default Header

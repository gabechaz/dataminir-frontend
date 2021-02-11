import React from "react"; 
import { Link } from "react-router-dom";

function NavBar () {
    console.log(currentUser)
return (
    <div className='navbar'>
    <h1>Dataminr</h1>
    <Link to='/questions'>Questions </Link>
    <Link to='/users/profile'> Profile</Link>
    <Link to='/users/signup'>Signup</Link>
    </div>
)
}

export default NavBar
import React from "react"; 
import { Link } from "react-router-dom";

function NavBar () {
return (
    <div className='navbar'>
    <h1>Dataminr</h1>
    <Link to='/questions'>Questions </Link>
    <Link to='/users/profile'> Profile</Link>
    </div>
)
}

export default NavBar
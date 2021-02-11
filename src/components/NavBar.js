import React from "react"; 
import { Link } from "react-router-dom";

function NavBar ({loggedIn}) {
  console.log(loggedIn)
return (
  
    <div className='navbar'>
    <h1>Dataminr</h1>
    <Link to='/questions' exact='true' >Questions </Link> 
    <Link  to='/users/profile'exact='true' > Profile</Link> 
    {loggedIn ? null : <Link  to='/users/signup'exact='true' >Signup </Link> } 
    {loggedIn ? null : <Link  to='/users/login'exact='true' >Log In </Link>}
    <Link  to='/questions/add-question' exact='true' >Add a Question </Link>
    <Link to='/questions/survey-page' exact='true'> Survey Page </Link>
    </div>
)
}

export default NavBar
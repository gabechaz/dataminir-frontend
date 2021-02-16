import React from "react"; 
import { Link } from "react-router-dom";

function NavBar ({currentUser, handleLogout}) {

return (
  <div className="ui five item menu">
    <a className="active item">Dataminr</a>
    <Link className="item" to='/questions' exact='true' > Questions </Link>
    <Link className="item" to='/questions/survey-page' exact='true'> Survey </Link>
    {currentUser ?  <Link  className="item" to='/users/profile' exact='true' > Profile </Link>  : <Link className="item" to='/users/signup' exact='true' > Signup </Link> }
    {currentUser ? <Link className="item" to='/users/logout' exact='true' onClick={handleLogout}>Log Out</Link> : <Link  className="item" to='/users/login' exact='true' > Log In </Link>}
</div>
  
    // <div className='navbar'>
    // <h1>Dataminr</h1>
    // <Link to='/questions' exact='true' > Questions </Link> 
   
    // {loggedIn ?  <Link  to='/users/profile' exact='true' > Profile </Link>  : <Link  to='/users/signup' exact='true' > Signup </Link> } 
    // {loggedIn ? null : <Link  to='/users/login' exact='true' > Log In </Link>}
    // {/* <Link  to='/questions/add-question' exact='true' > Add a Question </Link> */}
    // <Link to='/questions/survey-page' exact='true'> Survey Page </Link>
    // </div>
)
}

export default NavBar
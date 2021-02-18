import React from "react"; 
import { Link } from "react-router-dom";

function NavBar ({currentUser, handleLogout}) {

return (
  <div className="ui five item menu">
    <Link className="item olive header" to='/' exact='true' >
    <a className="active item olive header">Dataminr
    <i className="gem outline icon"></i>
    </a>
    </Link>
    <Link className="item olive header" to='/questions' exact='true' > Questions </Link>
    <Link className="item olive header" to='/responses' exact='true'> Survey Responses </Link>
    {currentUser ?  <Link  className="item olive header" to='/users/profile' exact='true' > Profile </Link>  : <Link className="item" to='/users/signup' exact='true' > Signup </Link> }
    {currentUser ? <Link className="item olive header" to='/users/logout' exact='true' onClick={handleLogout}>Log Out</Link> : <Link  className="item" to='/users/login' exact='true' > Log In </Link>}
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
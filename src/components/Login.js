import React, { useState } from "react"; 
import { useHistory } from "react-router-dom";

function Login ({ onSubmit }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState ("")

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const history = useHistory()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const newCurrentUser = {username, password}
    onSubmit(newCurrentUser)
    history.push('/questions')
  }
  
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h2>Login Page</h2>
      <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsername}/>
      </div>
      <div className="field">
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" value={password} onChange={handlePassword}/>
      </div>
      <button className="ui button" type="submit">Login</button>
    </form>
  )

}

export default Login; 
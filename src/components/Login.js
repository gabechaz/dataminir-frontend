import React, { useState } from "react"; 
import { useHistory } from "react-router-dom";

const Login = ({ onSubmit }) => {
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
  }
  
  return (
    <form className="ui form" style={{padding: '25px'}} onSubmit={handleSubmit}>
      <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsername}/>
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePassword}/>
      </div>
      <button className="ui olive button" type="submit">Login</button>
    </form>
  )

}

export default Login; 
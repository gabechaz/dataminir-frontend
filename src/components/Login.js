import React, { useState } from "react"; 

function Login ({ onSubmit }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState ("")

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newSession = {username, password}
    onSubmit(newSession)
  }
  
  // return (
  //   <div>
  //     <h2>Login Page</h2>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsername}/>
  //       <input type="text" name="password" placeholder="Password" value={password} onChange={handlePassword}/>
  //       <button type="submit">Login</button>
  //     </form>
  //   </div>

  // ); 

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
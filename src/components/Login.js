import React, { useState } from "react"; 

function Login () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState ("")
  
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input type="text" name="username" placeholder="Username" value="" />
        <input type="text" name="password" placeholder="Password" value="" />
        <button type="submit">Login</button>
      </form>
    </div>

  ); 

}

export default Login
import React, { useState } from "react"; 

function Signup ({ user }) {
  // const [name, setName] = useState("")
  // const [age, setAge] = useState("")
  // const [image, setImage] = useState("")
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")

  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <input type="text" name="name" placeholder="Name" value="" />
        <input type="text" name="age" placeholder="Age" value="" />
        <input type="text" name="image" placeholder="Profile Image" value="" />
        <input type="text" name="username" placeholder="Username" value="" />
        <input type="text" name="password" placeholder="Password" value="" />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}


export default Signup; 
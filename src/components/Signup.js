import React, { useState } from "react"; 

function Signup ({ onSubmit }) {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [image, setImage] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAge = (event) => {
    setAge(event.target.value)
  }

  const handleImage = (event) => {
    setImage(event.target.value)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newSignup = {name, age, image, username, password}
    onSubmit(newSignup)
  }

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={handleName} />
        <input type="text" name="age" placeholder="Age" value={age} onChange={handleAge} />
        <input type="text" name="image" placeholder="Profile Image" value={image} onChange={handleImage}/>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsername}/>
        <input type="text" name="password" placeholder="Password" value={password} onChange={handlePassword}/>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}


export default Signup; 
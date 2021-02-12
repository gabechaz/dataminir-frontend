import React, { useState } from "react"; 
import { useHistory } from "react-router-dom";

function Signup ({ onSubmit }) {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [ethnicity, setEthnicity] = useState("")
  const [genderIdentity, setGenderIdentity] = useState("")
  const [politicalParty, setPoliticalParty] = useState("")
  const [location, setLocation] = useState("")
  const [religion, setReligion] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAge = (event) => {
    setAge(event.target.value)
  }

  const handleEthnicity = (event) => {
    setEthnicity(event.target.value)
  }

  const handleGenderIdentity = (event) => {
    setGenderIdentity(event.target.value)
  }

  const handlePoliticalParty = (event) => {
    setPoliticalParty(event.target.value)
  }

  const handleLocation = (event) => {
    setLocation(event.target.value)
  }

  const handleReligion = (event) => {
    setReligion(event.target.value)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newSignup = {name, age, ethnicity, genderIdentity, politicalParty, location, religion, username, password}
    onSubmit(newSignup)
    history.push('/questions')
  }

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name *required" required value={name} onChange={handleName} />
        <input type="text" name="age" placeholder="Age" value={age} onChange={handleAge} />
        <input type="text" name="ethnicity" placeholder="Ethnicity" value={ethnicity} onChange={handleEthnicity}/>
        <input type="text" name="genderIdentity" placeholder="Gender Identity" value={genderIdentity} onChange={handleGenderIdentity}/>
        <input type="text" name="politicalParty" placeholder="Political Party" value={politicalParty} onChange={handlePoliticalParty}/>
        <input type="text" name="location" placeholder="Location" value={location} onChange={handleLocation}/>
        <input type="text" name="religion" placeholder="Religion" value={religion} onChange={handleReligion}/>
        <input type="text" name="username" placeholder="Username *required" required value={username} onChange={handleUsername}/>
        <input type="text" name="password" placeholder="Password *required" required value={password} onChange={handlePassword}/>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}


export default Signup; 
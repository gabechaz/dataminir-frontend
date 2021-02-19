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
  const wallet = 50
  
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
    const newSignup = {name, age, ethnicity, genderIdentity, politicalParty, location, religion, username, password, wallet}
    console.log(password)
    onSubmit(newSignup)
   
  }

  return (
    <form className="ui form" style={{padding: '25px'}} onSubmit={handleSubmit}>
      <div className="field">
        <label>*Name</label>
        <input type="text" name="name" placeholder="Name" required value={name} onChange={handleName}/>
      </div>
      <div className="field">
        <label>*Username</label>
        <input type="text" name="Username" placeholder="Username" required value={username} onChange={handleUsername}/>
      </div>
      <div className="field">
        <label>*Password</label>
        <input type="password" name="Password" placeholder="Password" value={password} onChange={handlePassword}/>
      </div>
      <div className="field">
        <label>Age</label>
        <input type="text" name="Age" placeholder="Age" value={age} onChange={handleAge}/>
      </div>
      <div className="field">
        <label>Ethnicity</label>
        <input type="text" name="Ethnicity" placeholder="Ethnicity" value={ethnicity} onChange={handleEthnicity}/>
      </div>
      <div className="field">
        <label>Gender Identity</label>
        <input type="text" name="Gender Identity" placeholder="Gender Identity" value={genderIdentity} onChange={handleGenderIdentity}/>
      </div>
      <div className="field">
        <label>Political Party</label>
        <input type="text" name="Politcal Party" placeholder="Political Party" value={politicalParty} onChange={handlePoliticalParty}/>
      </div>
      <div className="field">
        <label>Location</label>
        <input type="text" name="Location" placeholder="Location" value={location} onChange={handleLocation}/>
      </div>
      <div className="field">
        <label>Religion</label>
        <input type="text" name="Religion" placeholder="Religion" value={religion} onChange={handleReligion}/>
      </div>
      <button className="ui olive button" type="submit">Signup</button>
    </form>
  )
}


export default Signup; 
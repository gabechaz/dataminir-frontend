
import { Route, Switch } from "react-router-dom";
import React, { useState } from 'react'
import Profile from './Profile.js'
import AddQuestion from './AddQuestion.js'
import Login from './Login.js'
import Signup from './Signup.js'
import QuestionList from './QuestionList.js'
import SurveyPage from './SurveyPage.js'
import QuestionStats from './QuestionStats.js'
import NavBar from './NavBar'

function App() {
  const user = {
    name: "Gabe",
    age: 29,
    image: "placeholder",
    username: "gchaz",
    password: "abc123",
  };
  const spaceQuestion = {
    query: "Star Wars or Star Trek",
    answerA: "Star Trek",
    answerB: "Star Wars",
    price: 5,
  };
  const pizzaQuestion = {
    query: "Pizza or Tacos",
    answerA: "Pizza",
    answerB: "Tacos",
    price: 5,
  };

  const [questions, setQuestions] = useState([spaceQuestion]);
  const [users, setUsers] = useState([user]);
  const [sessions, setSessions] = useState([])

  console.log(questions)
  console.log(users)
  console.log(sessions)

  const addNewQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const addNewUser = (newSignup) => {
    setUsers([...users, newSignup]);
  };

  const addNewSession = (newSession) => {
    setSessions([...sessions, newSession])
  }

  // Variable Declarations
  const user = {name: 'Gabe', age: 29, image: 'placeholder', username: "gchaz", password: "abc123"}
  const spaceQuestion = {query: 'Star Wars or Star Trek', answerA: 'Star Trek', answerB: 'Star Wars', price: 5}
  

  // State Variables ////////////////////////////
  const [currentUser, setCurentUser] = useState(user)
  const [questions, setQuestions] = useState([spaceQuestion])
  const [loggedIn, setLoggedIn] = useState(false)


    // Event Listeners
    const onSubmit = (newQuestion) => {
      setQuestions([...questions, newQuestion])
    }
  return (
    <div className="App">
      <nav>Dataminr</nav>
      <NavBar loggedIn={loggedIn} />
      <Switch>
        <Route exact path='/questions/survey'> 
          <SurveyPage questionStats = {pizzaQuestion} />
      </Route>
        <Route exact path='/users/profile' >
        <Profile user = {user} />
        </Route>
        <Route exact path='/questions'>
          <QuestionList queryArr = {questions} /> 
        </Route>
        <Route exact path='/questions/add-question'>
          <AddQuestion onSubmit={addNewQuestion}/>
        </Route>
        <Route exact path='/users/signup'>
          <Signup onSubmit={addNewUser} />
        </Route>
        <Route exact path='/users/login'>
          <Login onSubmit = {addNewSession} />
        </Route>
        <Route exact path='/questions/survey-page'>
          <SurveyPage questionStats = {pizzaQuestion} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

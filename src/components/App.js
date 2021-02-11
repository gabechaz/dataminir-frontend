
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
const pizzaQuestion = {query: 'Pizza or Tacos', answerA: 'Pizza', answerB: 'Tacos', price: 5}

  const user = {name: 'Gabe', age: 29, image: 'placeholder', username: "gchaz", password: "abc123"}
  const spaceQuestion = {query: 'Star Wars or Star Trek', answerA: 'Star Trek', answerB: 'Star Wars', price: 5}
  const [questions, setQuestions] = useState([spaceQuestion])

  const onSubmit = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  const [currentUser, setCurentUser] = useState(user)

  return (
    <div className="App">
      <NavBar setCurentUser={setCurentUser} />
      <Switch>
        <Route path='/questions/survey'> 
          <SurveyPage questionStats = {pizzaQuestion} />
      </Route>
        <Route path='/users/profile' >
        <Profile user = {user} />
        </Route>
        <Route path='/questions'>
          <QuestionList queryArr = {queryArr} /> 
        </Route>
        <Route path='/questions/add-question'>
          <AddQuestion onSubmit={onSubmit}/>
        </Route>
        <Route path='/users/signup'>
          <Signup user = {user} />
        </Route>
        <Route path='/users/login'>
          <Login user = {user} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

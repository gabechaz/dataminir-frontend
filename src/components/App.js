import React from 'react'
import { Route, Switch } from "react-router-dom";
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
const spaceQuestion = {query: 'Star Wars or Star Trek', answerA: 'Star Trek', answerB: 'Star Wars', price: 5}

const queryArr = [pizzaQuestion, spaceQuestion]
  const user = {name: 'Gabe', age: 29, image: 'placeholder'}


  return (
    <div className="App">
      <NavBar />
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
      </Switch>
    </div>
  );
}

export default App;

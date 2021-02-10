import React from 'react'
import Profile from './Profile.js'
import AddQuestion from './AddQuestion.js'
import Login from './Login.js'
import Signup from './Signup.js'
import QuestionList from './QuestionList.js'
import SurveyPage from './SurveyPage.js'
import QuestionStats from './QuestionStats.js'


function App() {
const pizzaQuestion = {query: 'Pizza or Tacos', answerA: 'Pizza', answerB: 'Tacos', price: 5}
const spaceQuestion = {query: 'Star Wars or Star Trek', answerA: 'Star Trek', answerB: 'Star Wars', price: 5}

const queryArr = [pizzaQuestion, spaceQuestion]
  const user = {name: 'Gabe', age: 29, image: 'placeholder'}


  return (
    <div className="App">
      <nav>
       Dataminr
      </nav>
      {/* <SurveyPage questionStats = {pizzaQuestion} /> */}
      {/* <Profile user = {user} /> */}
      <QuestionList queryArr = {queryArr} /> 
    </div>
  );
}

export default App;

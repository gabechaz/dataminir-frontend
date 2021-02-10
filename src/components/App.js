import React, { useState } from 'react'
import Profile from './Profile.js'
import AddQuestion from './AddQuestion.js'
import Login from './Login.js'
import Signup from './Signup.js'
import QuestionList from './QuestionList.js'
import SurveyPage from './SurveyPage.js'
import QuestionStats from './QuestionStats.js'


function App() {
const pizzaQuestion = {query: 'Pizza or Tacos', answerA: 'Pizza', answerB: 'Tacos', price: 5}

  const user = {name: 'Gabe', age: 29, image: 'placeholder', username: "gchaz", password: "abc123"}
  const spaceQuestion = {query: 'Star Wars or Star Trek', answerA: 'Star Trek', answerB: 'Star Wars', price: 5}
  const [questions, setQuestions] = useState([spaceQuestion])

  const onSubmit = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  return (
    <div className="App">
      <nav>
       Dataminr
      </nav>
      <Profile user = {user} />
      <AddQuestion onSubmit={onSubmit}/>
      <Signup user = {user} />
      <Login user = {user} />
      <SurveyPage questionStats = {pizzaQuestion} />
      {/* <QuestionList queryArr = {queryArr} />  */}
    </div>
  );
}

export default App;

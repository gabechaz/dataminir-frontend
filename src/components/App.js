import React from 'react'
import Profile from './Profile.js'
import AddQuestion from './AddQuestion.js'
import Login from './Login.js'
import Signup from './Signup.js'
import QuestionList from './QuestionList.js'
import SurveyPage from './SurveyPage.js'
import QuestionStats from './QuestionStats.js'




function App() {

  const user = {name: 'Gabe', age: 29, image: 'placeholder'}
  console.log('app log', user)

  return (
    <div className="App">
      <header>
       Dataminr
      </header>
      <Profile user = {user} />
    </div>
  );
}

export default App;

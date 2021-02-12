import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Profile from './Profile.js'
import AddQuestion from './AddQuestion.js'
import Login from './Login.js'
import Signup from './Signup.js'
import QuestionList from './QuestionList.js'
import SurveyPage from './SurveyPage.js'
import SurveyList from './SurveyList.js'
import QuestionStats from './QuestionStats.js'
import NavBar from './NavBar'

function App() {
  // State Variables
  const [currentUser, setCurrentUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);
  // Fetch Requests

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((questionData) => { setQuestions(questionData)})
  }, [])


  const addNewUser = (newSignup) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSignup),
    })
      .then((r) => r.json())
      .then((newSignup) => setUsers([...users, newSignup]));
  };

  const addNewQuestion = (newQuestion) => {
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((r) => r.json())
      .then((newQuestion) => setQuestions([...questions, newQuestion]));
  };

  const addNewCurrentUser = (newCurrentUser) => {
    setCurrentUser(newCurrentUser);
  };

  // Event Listeners
  return (
    <div className="App">
      <NavBar loggedIn={currentUser} />
      <Switch>
        <Route exact path="/users/profile">
          <Profile />
        </Route>
        <Route exact path="/questions">
          <QuestionList queryArr={questions} />
        </Route>
        <Route>
          <AddQuestion onSubmit={addNewQuestion} />
        </Route>
        <Route exact path="/users/signup">
          <Signup onSubmit={addNewUser} />
        </Route>
        <Route exact path='/users/login'>
          <Login  onSubmit={addNewCurrentUser}/>
        </Route>
        <Route exact path='/surveys/:id'>
          <SurveyPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

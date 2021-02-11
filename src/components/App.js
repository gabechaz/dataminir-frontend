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

  // State Variables 
  const [currentUser, setCurentUser] = useState(null)
  const [questions, setQuestions] = useState([spaceQuestion])
  const [users, setUsers] = useState([user]);
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


  // State Variables
  const [currentUser, setCurentUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);

  const addNewSession = (newSession) => {
    setSessions([...sessions, newSession]);
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
        <Route exact path="/questions/add-question">
          <AddQuestion onSubmit={addNewQuestion} />
        </Route>
        <Route exact path="/users/signup">
          <Signup onSubmit={addNewUser} />
        </Route>
        <Route exact path='/users/login'>
          <Login  />
        </Route>
        <Route exact path='/surveys/:id'>
          <SurveyPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

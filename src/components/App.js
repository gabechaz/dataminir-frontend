import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Profile from './Profile.js'
import AddQuestion from './AddQuestion.js'
import Login from './Login.js'
import Signup from './Signup.js'
import QuestionList from './QuestionList.js'
import SurveyPage from './SurveyPage.js'
import ResponseList from './ResponseList.js'
import QuestionStats from './QuestionStats.js'
import NavBar from './NavBar'

function App() {
  const user = {
    id: 1,

  }
  // State Variables
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserWallet, setCurrentUserWallet] = useState(null)
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
    fetch("http://localhost:3000/login", {
      method: "POST"
    })
      .then((r) => r.json())
      .then((newUser) => {
        setCurrentUser(newUser)
        setCurrentUserWallet(newUser.wallet)
    });
  };

  const logout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST"
    })
      .then((User) => {
        setCurrentUser(null)
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((response) => response.json())
      .then((userData) => { setCurrentUser(userData)})
  }, [])


  // Event Listeners
  return (
    <div className="App">
      <NavBar currentUser={currentUser} handleLogout={logout} />
      <Switch>
        <Route exact path="/users/profile">
        {currentUser &&  <Profile currentUserWallet = {currentUserWallet} currentUser={currentUser}/>}
        </Route>
        <Route exact path="/questions">
          <AddQuestion currentUser = {currentUser} onSubmit={addNewQuestion} />
          <QuestionList queryArr={questions} />
        </Route>
        <Route exact path="/users/signup">
          <Signup onSubmit={addNewUser} />
        </Route>
        <Route exact path ='/questions/:id' >
        <QuestionStats />
        </Route>
        <Route exact path='/users/login'>
          <Login  setCurrentUser={setCurrentUser} onSubmit={addNewCurrentUser}/>
        </Route>
        <Route exact path = '/responses'>
          <ResponseList currentUser = {currentUser} />
        </Route>
        <Route exact path='/surveys/:id'>
          <SurveyPage setCurrentUser = {setCurrentUser} currentUser ={currentUser} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

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
import Home from './Home.js'
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory()
  // State Variables
  const [currentUser, setCurrentUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeQuestion,setActiveQuestion] = useState(" ")
  const [userQuestions, setUserQuestions] = useState([])
  
  // Fetch Requests


  useEffect(() => {
    const token = localStorage.getItem("token") 
    fetch("https://dataminr-backend.herokuapp.com/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((userData) => { 
        if (userData?.id)
        {setCurrentUser(userData)}})
  }, [])



  // useEffect(() => {
  //   fetch(`https://dataminr-backend.herokuapp.com/users/${currentUser.id}`)
  //     .then((response) => response.json())
  //     .then((userData) => { setUserQuestions(userData.questions)})
  // }, [])
  
  useEffect(() => {
    fetch("https://dataminr-backend.herokuapp.com/questions")
      .then((response) => response.json())
      .then((questionData) => { setQuestions(questionData)})
  }, [])

  const addNewUser = (newSignup) => {
    fetch("https://dataminr-backend.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSignup),
    })
      .then((r) => r.json())
      .then((newSignup) =>{ 
        const {user, token} = newSignup
        localStorage.setItem("token", token )
      setCurrentUser(user)
        setUsers([...users, user])
        history.push('/users/profile')}
        )
       
  };
  
  const addNewQuestion = (newQuestion) => {
    const token = localStorage.getItem("token") 
    
    fetch("https://dataminr-backend.herokuapp.com/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newQuestion),
    })
      .then((r) => r.json())
      .then((newQuestion) => {
        console.log('new question', newQuestion)
        setQuestions([...questions, newQuestion])
        history.push(`/surveys/${newQuestion.id}`)
      } )}

  const addNewCurrentUser = (newCurrentUser) => {
    fetch("https://dataminr-backend.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json"},
        body: JSON.stringify(newCurrentUser)
      }
    )
      .then((r) => r.json())
      .then((newUser) => {
        console.log(newUser)
        if (newUser.errors){
          console.log(newUser.errors)
        } else {
          const {user, token} = newUser
          console.log(newUser)
          localStorage.setItem("token", token )
        setCurrentUser(user)
        history.push('/questions')}

    });
  };

  const logout = () => {
    localStorage.removeItem("token")
    fetch("https://dataminr-backend.herokuapp.com/logout", {
      method: "POST"
    })
      .then((user) => {
        setCurrentUser(null)
        console.log('logged out')
    });
  };




  // Event Listeners
  return (
    <div className="App">
      <NavBar currentUser={currentUser} handleLogout={logout} />
      <Switch>
      <Route exact path="/">
          <Signup onSubmit={addNewUser} />
        </Route>
        <Route exact path="/users/profile">
        {currentUser &&  <Profile  currentUser={currentUser}/>}
        </Route>
        <Route exact path="/questions">
          {currentUser && <AddQuestion setCurrentUser = {setCurrentUser} currentUser = {currentUser} onSubmit={addNewQuestion} />}
          {questions && <QuestionList currentUser={currentUser} queryArr={questions} />}
        </Route>
        <Route exact path="/users/signup">
          <Signup onSubmit={addNewUser} />
        </Route>
        <Route exact path ='/questions/:id' >
       {activeQuestion && <QuestionStats setActiveQuestion = {setActiveQuestion} activeQuestion = {activeQuestion} />}
        </Route>
        {/* <Route exact path = '/'>
          <Home />
        </Route> */}
        <Route exact path='/users/login'>
          <Login  setCurrentUser={setCurrentUser} onSubmit={addNewCurrentUser}/>
        </Route>
        <Route exact path = '/responses'>
         {currentUser && <ResponseList setUserQuestions = {setUserQuestions} userQuestions = {userQuestions} currentUser = {currentUser} />}
        </Route>
        <Route exact path='/surveys/:id'>
          {activeQuestion && <SurveyPage userQuestions = {userQuestions} setUserQuestions = {setUserQuestions}
           setActiveQuestion = {setActiveQuestion} setCurrentUser = {setCurrentUser} currentUser ={currentUser} />}
        </Route>

      </Switch>
    </div>
  );
}

export default App;

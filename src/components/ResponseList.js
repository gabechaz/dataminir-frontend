import React, { useState, useEffect } from 'react'
import ResponseCard from './ResponseCard.js'
function ResponseList({currentUser}) {
    const [userQuestions, setUserQuestions] = useState(currentUser.questions)
    const [responseCards, setResponseCards] = useState(null)

useEffect(() => {
    setUserQuestions(currentUser)
    fetch(`http://localhost:3000/users/${currentUser.id}`)
      .then((response) => response.json())
      .then((userData) => setUserQuestions(userData.questions))
  }, [])



  useEffect (() => {

  const responses =  userQuestions.map((response) => { 
      console.log('gotcha')
    return (
        <ResponseCard  response = {response} />
    )
})
    setResponseCards(responses)
  }, [])







return (
<div>
    {responseCards}
</div>
    
)

}

export default ResponseList
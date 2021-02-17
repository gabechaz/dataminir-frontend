import React, { useState, useEffect } from 'react'
import ResponseCard from './ResponseCard.js'
function ResponseList({currentUser}) {
    const [userQuestions, setUserQuestions] = useState(currentUser.questions)
    const [responseCards, setResponseCards] = useState(null)
    const [tick, setTick] = useState('non-ticked')
// useEffect(() => {
    // setUserQuestions(currentUser)
    if (tick === 'non-ticked')
    {
    fetch(`http://localhost:3000/users/${currentUser.id}`)
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData.questions)
        setUserQuestions(userData.questions)
        const responses =  userQuestions.map((response) => { 
          return (
              <ResponseCard key = {response.id} response = {response} />
          )
          
      }
      )
      setResponseCards(responses) 
    })
    setTick('ticked')}
//   }, [])


return (
<div>
    <div className="ui massive middle aligned divided animated centered list">{responseCards}</div>
</div>
    
)
}

export default ResponseList
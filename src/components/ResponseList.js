import React, { useState, useEffect } from 'react'
import ResponseCard from './ResponseCard.js'
function ResponseList({currentUser}) {
    console.log(currentUser)
    const [uIQ, setUIQ] = useState(currentUser)
    const [userQuestions, setUserQuestions] = useState(uIQ.questions)

   const responses =  userQuestions.map((response) => { 
        return (
            <ResponseCard  response = {response} />
        )
    })

useEffect(() => {
    setUIQ(currentUser)
//     console.log(uIQ)
    fetch(`http://localhost:3000/users/${uIQ.id}`)
      .then((response) => response.json())
      .then((userData) => console.log(userData.questions))
  }, [])
return (
<div>
    <div className="ui massive middle aligned divided animated centered list">{responses}</div>
</div>
    
)
}

export default ResponseList
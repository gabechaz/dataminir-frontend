import React, { useState, useEffect } from 'react'
import ResponseCard from './ResponseCard.js'
function ResponseList({currentUser, userQuestions, setUserQuestions}) {

      useEffect(() => {
    fetch(`http://localhost:3000/users/${currentUser.id}`)
      .then((response) => response.json())
      .then((userData) => { setUserQuestions(userData.questions)})
  }, [])

        const responses =  userQuestions.map((response) => { 
          return (
              <ResponseCard key = {response.id} response = {response} />
                )    
         }
      )
return (
<div>
    <div className="ui massive middle aligned divided animated centered list">{responses}</div>
</div>
    )
}
export default ResponseList
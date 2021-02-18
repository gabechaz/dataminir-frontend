import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";


function ResponseCard ({response}) {
  console.log(response)
    function handleClick (e) {
        history.push(`/questions/${response.id}`)
    }


    function deleteAnswer (e) {
      fetch(`http://localhost:3000/answers/${response.id}`, {
        method: 'DELETE'
      })
      .then(data => {
        let parentDiv = e.target.closest('div')
        parentDiv.remove()
      })
    }

   const history = useHistory()
    return (
      <div className="ui centered card">
        <div class="ui olive animated fade button" tabindex="0" onClick={handleClick}>
          <div class="visible content">{response.question}</div>
          <div class="hidden content">{response.answer_count <= 1 ? (`${response.answer_count} response`) : (`${response.answer_count} responses`)}</div>
          <br></br>
          
        </div>
        <button onClick = {deleteAnswer} class="ui red centered button">Delete Answer</button>
      </div>
      
    )
}

export default ResponseCard
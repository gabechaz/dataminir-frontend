import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";


function ResponseCard ({response}) {
    function handleClick (e) {
        history.push(`/questions/${response.id}`)
    }
   const history = useHistory()
    return (
      <div className="centered item">
        <div class="ui olive animated fade centered button" tabindex="0" onClick={handleClick}>
          <div class="visible content">{response.question}</div>
          <div class="hidden content">{response.answer_count} responses</div>
        </div>
      </div>
    )
}

export default ResponseCard
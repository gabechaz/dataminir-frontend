import React from "react"; 

function QuestionStats ({questionStats: {query, answerA, answerB, price}}) {
    return (
      <div id='question-box'>
        <h1 id='question'>{query}</h1>
        <h3 class='answer'> {answerA}</h3>
        <h3 class='answer'> {answerB}</h3>
        <h5>Price: {price}</h5>
      </div>
    )
}

export default QuestionStats
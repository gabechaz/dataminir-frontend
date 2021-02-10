import React from "react"; 

function SurveyPage ({questionStats: {query, answerA, answerB, price}}) {
    console.log(query)
    return (
        <div id='question-box'>
            <h1 id='question'>{query}</h1>
            <label for='answer-a'>{answerA}</label>
            <input id='answer-a' type='radio' name='answer-a' className='answer' />
            <br />
            <label for='answer-b'>{answerB}</label>
            <input id='answer-b' type='radio' name='answer-b' className='answer' />
         
            <h5>Price: {price}</h5>
        </div>
    )
}


export default SurveyPage; 
import React from "react"; 

function SurveyPage ({questionStats: {query, answerA, answerB, price}}) {
    console.log(query)
    return (
        <div id='question-box'>
            <h1 id='question'>{query}</h1>
            
            <label >{answerA}
            <input id='answer-a' value='option1' type='radio' name='answer' className='answer' />
            </label>
           
            <br />
            
            <label>{answerB}
            <input id='answer-b' value='option2' type='radio' name='answer' className='answer' />
            </label>
            <br />
            <label> 
            <input type='submit'></input>
            </label>
            <h5>Price: {price}</h5>
        </div>
    )
}


export default SurveyPage; 
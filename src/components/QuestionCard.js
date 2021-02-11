import React from "react"; 
import { Link } from "react-router-dom";
function QuestionCard ({questionStats: {question, reward, optionA, optionB, id}}) {
    
    return (
<div>
        <h1>{question}</h1>
        <h3>Reward: {reward}</h3>
        <Link to='/questions/survey'>
        <button>ANSWER</button>
        </Link>
</div>
    )

}

export default QuestionCard
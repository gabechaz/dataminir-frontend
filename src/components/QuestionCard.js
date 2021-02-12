import React from "react"; 
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function QuestionCard ({questionStats: {question, reward, optionA, optionB, id, user_id}}) {
    const history = useHistory()

    function answerSurvey (e) {
        history.push(`/surveys/${id}`)
    }

    return (
<div>
        <h1>{question}</h1>
        <h3>Reward: {reward}</h3>
    
        <button onClick={answerSurvey}>ANSWER</button>
    
</div>
    )

}

export default QuestionCard
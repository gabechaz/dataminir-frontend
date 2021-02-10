import React from "react"; 

function QuestionCard ({questionStats: {query, price, answerA, answerB}}) {
    
    return (
<div>
        <h1>{query}</h1>
        <h3>Price: {price}</h3>
        <button>ANSWER</button>
</div>
    )

}

export default QuestionCard
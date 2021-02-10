import React from "react"; 
import QuestionStats from "./QuestionStats.js"
import SurveyPage from './SurveyPage.js'
import QuestionCard from './QuestionCard.js'

function QuestionList ({queryArr}) {
 
    const questions = queryArr.map(query => {
        return <QuestionCard key = {query.query} questionStats = {query} />
    })
return (
<div>
{questions}
</div>


)

}


export default QuestionList; 
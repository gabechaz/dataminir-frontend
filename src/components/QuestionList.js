import React, { useState } from "react"; 
import QuestionStats from "./QuestionStats.js"
import SurveyPage from './SurveyPage.js'
import QuestionCard from './QuestionCard.js'
import AddQuestion from './AddQuestion.js'

function QuestionList ({queryArr}) {

    const questions = queryArr.map(query => {
        return <QuestionCard key = {query.id} questionStats = {query} />
    })
  
return (
  <div>
    {questions}
  </div>
)

}

export default QuestionList; 
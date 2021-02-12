import React, { useState } from "react"; 
import QuestionStats from "./QuestionStats.js"
import SurveyPage from './SurveyPage.js'
import QuestionCard from './QuestionCard.js'
import AddQuestion from './AddQuestion.js'

function QuestionList ({queryArr}) {
  const [isFormShown, setIsFormShown] = useState(false)

    const questions = queryArr.map(query => {
        return <QuestionCard key = {query.id} questionStats = {query} />
    })

    const handleIsFormShown = () => {
      setIsFormShown((isFormShown) => !isFormShown);
    }
   
  
return (
  <div>
    {isFormShown ? <AddQuestion /> : null}
    {isFormShown ? null: <button onClick = {handleIsFormShown}>Add A Question</button>}
    {questions}
  </div>
)

}

export default QuestionList; 
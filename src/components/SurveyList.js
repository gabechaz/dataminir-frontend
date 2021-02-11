import React from "react"; 
import { Route, Switch } from "react-router-dom";
import SurveyPage from './SurveyPage.js'

function SurveyList ({queryArr}) {
    const questions = queryArr.map(query => {
        const surveyPath = `/surveys/${query.id}`
        return (
            
            <Route exact path = {surveyPath}>
            <SurveyPage key={query.id} query={query} />
            </Route>
        )})

return (
    <div>{questions}</div>
    
)

}

export default SurveyList
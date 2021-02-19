import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"


const dummyQuestion = {
    question: 'PlaceHolder',
    option1: 'Placeholder',
    option2: 'Placeholder',
    reward: 'Placeholder',
    option_1_count: 'Placeholder',
    option_2_count: 'Placeholder'
}

function QuestionStats ({activeQuestion, setActiveQuestion}) {
    
   
    const { id } = useParams()
    const [activeDemo, setActiveDemo] = useState('users')
    // useEffect (() => {
    //     fetch(`https://dataminr-backend.herokuapp.com/questions/${id}`)
    // .then( res => res.json())
    // .then(question => setActiveQuestion(question))
    // }, []
    // )


    const {question,
        option1,
        option2,
        reward,
        option_1_count,
       answer_count}
        = activeQuestion
    
 
      
        useEffect(() => {
            fetch(`https://dataminr-backend.herokuapp.com/questions/${id}`)
                .then(r => r.json())
                .then(data => {
                    setActiveQuestion(data)
                    
                })
                
        }, [])
    return (
      <div className="ui centered olive card">
        <div className="content">
          <div className="header">{question}</div>
        </div>
        {/* <div className="content">
          <h4 className="ui sub header">{option_1_count}% of users answered {option1}</h4>
          <h4 className="ui sub header">{100 - option_1_count}% of users answered {option2}</h4>
          <h4 className="ui sub header">{answer_count <= 1 ? (`${answer_count} user answered this question`) : (`${answer_count} users answered this question`)}</h4>
        </div> */}
        <div class="ui statistics" style={{margin: 'inherit'}}>
          <div class="olive statistic">
            <div class="value">{option_1_count}%</div>
            <div class="label">of users answered {option1}</div>
          </div>
          <div class="olive statistic">
            <div class="value">{100 - option_1_count}%</div>
            <div class="label">of users answered {option2}</div>
          </div>
        </div>
        <div className="content">
          <div className="ui sub header">{answer_count <= 1 ? (`${answer_count} user answered this question`) : (`${answer_count} users answered this question`)}</div>
        </div>
        <div className="content">
          <div className="ui sub header">REWARD: {reward}</div>
        </div>
      </div>
    )
}


export default QuestionStats
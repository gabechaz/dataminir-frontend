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
    const [activeDemo, setActiveDemo] = useState(null)
    // useEffect (() => {
    //     fetch(`http://localhost:3000/questions/${id}`)
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
            fetch(`http://localhost:3000/questions/${id}`)
                .then(r => r.json())
                .then(data => {
                    setActiveQuestion(data)
                    
                })
                
        }, [])
    return (
        
        <div id='question-box'>
            <h1 id='question'>{question}</h1>
            <h3 className='answer'> {option1} {option_1_count}%</h3>
            <h3 className='answer'> {option2} {100 - option_1_count}%</h3>
            <h3 className='answer'>{answer_count} users answered this question</h3>
            <h5>Price: {reward}</h5>
        </div>
    )
}

export default QuestionStats
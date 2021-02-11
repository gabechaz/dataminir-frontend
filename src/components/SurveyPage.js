import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function SurveyPage () {
    
    const [sponsor, setSponsor] = useState("")
    const [question, setQuestion] = useState({})
    const { id } = useParams()
 


    useEffect(() => {
        fetch(`http://localhost:3000/questions/${id}`)
            .then(r => r.json())
            .then(data => setQuestion(data))
    }, [id])
    // Need to put in the logic to create users so this fetch function actually does something
    // fetch(`http://localhost:3000/users/${creator_id}`)
    // .then(res => res.json())
    // .then (user => setSponsor(user.name))

    return (
        <div id='question-box'>
            <h1 id='question'></h1>
            <br />
            <h2>Submitted by: </h2>
            <label >
            <input id='answer-a' value='option1' type='radio' name='answer' className='answer' />
            </label>
           
            <br />
            
            <label>
            <input id='answer-b' value='option2' type='radio' name='answer' className='answer' />
            </label>
            <br />
            <label> 
            <input type='submit'></input>
            </label>
            <h5>Price: </h5>
        </div>
    )
}


export default SurveyPage; 
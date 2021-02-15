import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
function SurveyPage ({currentUser}) {
    console.log(currentUser)
    const [sponsor, setSponsor] = useState("")
    const [questionObj, setQuestionObj] = useState({})
    const { id } = useParams()
    const {reward, creator_id, option1, option2, question} = questionObj
    const [selectedOption, setSelectedOption] = useState('option1')
    const history = useHistory()

    function handleSubmit (e) {
        e.preventDefault()
       const answerObj = {
           user_id: currentUser.id,
           question_id: id,
           response: selectedOption
       }
       console.log(answerObj)
       fetch("http://localhost:3000/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answerObj),
      })
      .then(res => res.json())
      .then(answer => console.log(answer))
      history.push(`/questions/${id}`)
    }

   
  

    useEffect(() => {
        fetch(`http://localhost:3000/questions/${id}`)
            .then(r => r.json())
            .then(data => setQuestionObj(data))
    }, [])



    // Need to put in the logic to create users so this fetch function actually does something
    // fetch(`http://localhost:3000/users/${creator_id}`)
    // .then(res => res.json())
    // .then (user => setSponsor(user.name))

    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{question}</div>
        </div>
        <div className="content">
          <form className="ui sub header" onSubmit={handleSubmit}>
            <label>
              <h4>{option1}</h4>
              <input checked={selectedOption === 'option1'} onChange={() => {setSelectedOption('option1')}} id='answer-a' value='option1' type='radio' name='answer' className='answer' />
            </label>
            <br />
            <label>
              <h4>{option2}</h4>
              <input checked={selectedOption === 'option2'} onChange={() => {setSelectedOption('option2')}} id='answer-b' value='option2' type='radio' name='answer' className='answer' />
            </label>
            <br />
            <label> 
              <input className="ui button" type='submit'></input>
            </label>
          </form>
        </div>
        <div className="content">
          <h4 className="ui sub header">Submitted By: </h4>
        </div>
        <div className="extra content">
        <h4 className="ui sub header">Reward: {reward}</h4>
        </div>
      </div>
    )
}


export default SurveyPage; 
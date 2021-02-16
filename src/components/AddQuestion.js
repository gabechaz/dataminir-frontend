import React, { useState }from "react"; 

function AddQuestion ( {onSubmit, currentUser} )  {
 
  const [question, setQuestion] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [reward, setReward] = useState("")
  const [isFormShown, setIsFormShown] = useState(false)

  const handleIsFormShown = () => {
    setIsFormShown((isFormShown) => !isFormShown);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newQuestion = {question, option1, option2, reward}
    onSubmit(newQuestion)
    handleIsFormShown()
  }

  const handleQuestion = (event) => {
    setQuestion(event.target.value)
  }

  const handleOption1 = (event) => {
    setOption1(event.target.value)
  }

  const handleOption2 = (event) => {
    setOption2(event.target.value)
  }

  const handleReward = (event) => {
    setReward(event.target.value)
  }

    return (
      <div>
        {isFormShown && 
       (<form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Question</label>
            <input type="text" name="query" placeholder="Question" value={question} onChange={handleQuestion}/>
          </div>
          <div className="field">
            <label>Option 1</label>
            <input type="text" name="answerA" placeholder="Option1" value={option1} onChange={handleOption1}/>
          </div>
          <div className="field">
            <label>Option 2</label>
            <input type="text" name="answerB" placeholder="Option2" value={option2} onChange={handleOption2}/>
          </div>
          <div className="field">
            <label>Reward</label>
            <input type="text" name="reward" placeholder="Reward" value={reward} onChange={handleReward}/>
          </div>
          <button className="ui button" type="submit">Add Question</button>
        </form>) }
        {isFormShown ? null: <button className="ui button" onClick = {handleIsFormShown}>Add A Question</button>}
      </div>
    );
}

export default AddQuestion
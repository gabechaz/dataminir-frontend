import React, { useState }from "react"; 

function AddQuestion ( {onSubmit} )  {
 
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
        <h2>Add a New Question</h2>
        {isFormShown && 
       (<form onSubmit={handleSubmit}>
          <input type="text" name="query" placeholder="Question" value={question} onChange={handleQuestion}/>
          <input type="text" name="answerA" placeholder="Option1" value={option1} onChange={handleOption1}/>
          <input type="text" name="answerB" placeholder="Option2" value={option2} onChange={handleOption2}/>
          <input type="text" name="reward" placeholder="Reward" value={reward} onChange={handleReward}/>
          <button type="submit">Add Question</button>
        </form>) }
        {isFormShown ? null: <button onClick = {handleIsFormShown}>Add A Question</button>}
      </div>
    );

}

export default AddQuestion
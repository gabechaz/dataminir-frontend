import React, { useState }from "react"; 
import { useHistory } from "react-router-dom"; 

function AddQuestion ( {onSubmit, setCurrentUser, currentUser} )  {
 
  const [question, setQuestion] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [isFormShown, setIsFormShown] = useState(false)
  const creator_id = currentUser.id
  const walletObj = {wallet: currentUser.wallet - 50}
  const reward = 10
  const handleIsFormShown = () => {
    setIsFormShown((isFormShown) => !isFormShown);
  }

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(walletObj),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser ((currentUser) => {
        console.log(data)
        return (
          {...currentUser, wallet: data.wallet}
        )
  
      }) )
    const newQuestion = {question, option1, option2, reward,creator_id}
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



    return (
      <div>
        {isFormShown && 
       (<form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Question</label>
            <input autocomplete="off" type="text" name="query" placeholder="Question" value={question} onChange={handleQuestion}/>
          </div>
          <div className="field">
            <label>Option 1</label>
            <input autocomplete="off" type="text" name="answerA" placeholder="Option1" value={option1} onChange={handleOption1}/>
          </div>
          <div className="field">
            <label>Option 2</label>
            <input autocomplete="off" type="text" name="answerB" placeholder="Option2" value={option2} onChange={handleOption2}/>
          </div>
          
          <p>Cost: 50 points</p>
          <button className="ui button" type="submit">Add Question</button>
        </form>)}
        <div style={{padding: '25px'}}>
        {isFormShown ? null: <button className="ui olive button" onClick = {handleIsFormShown}>Add A Question</button>}
        </div>
      </div>
    );
}

export default AddQuestion



import React, { useState }from "react"; 

function AddQuestion ({ onSubmit })  {
  const [query, setQuery] = useState("")
  const [answerA, setAnswerA] = useState("")
  const [answerB, setAnswerB] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const newQuestion = {query, answerA, answerB, price}
    onSubmit(newQuestion)
  }

  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  const handleAnswerA = (event) => {
    setAnswerA(event.target.value)
  }

  const handleAnswerB = (event) => {
    setAnswerB(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(event.target.value)
  }

    return (
      <div>
        <h2>Add a New Question</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" placeholder="Query" value={query} onChange={handleQuery}/>
          <input type="text" name="answerA" placeholder="AnswerA" value={answerA} onChange={handleAnswerA}/>
          <input type="text" name="answerB" placeholder="AnswerB" value={answerB} onChange={handleAnswerB}/>
          <input type="text" name="price" placeholder="Price" value={price} onChange={handlePrice}/>
          <button type="submit">Add Question</button>
        </form>
      </div>
    );


}

export default AddQuestion
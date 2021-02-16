import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
function SurveyPage({ currentUser, setCurrentUser, activeQuestion, setActiveQuestion }) {
  const [questionObj, setQuestionObj] = useState({});
  const { id } = useParams();
  const { reward, option1, option2, question, creator } = questionObj;
  const [selectedOption, setSelectedOption] = useState("option1");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(activeQuestion)
    setActiveQuestion({id: id})
    console.log(activeQuestion)
    const answerObj = {
      user_id: currentUser.id,
      question_id: id,
      response: selectedOption,
    };
    console.log(currentUser.wallet, questionObj.reward);
    const walletObj = {
      wallet: currentUser.wallet + questionObj.reward,
    };
    console.log(walletObj);
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
        return (
          {...currentUser, wallet: data.wallet}
        )
      }) )

    fetch("http://localhost:3000/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(answerObj),
    })
    history.push(`/questions/${id}`)
    console.log(activeQuestion)
    // setNSendQuestion(activeQuestion.id)
  }

    function setNSendQuestion (id) {
      fetch(`http://localhost:3000/questions/${id}`)
      .then(res => res.json())
      .then(question => {setActiveQuestion(question)
      history.push(`/questions/${id}`);
      })
    }

  useEffect(() => {
    fetch(`http://localhost:3000/questions/${id}`)
      .then((r) => r.json())
      .then((data) => setQuestionObj(data));
  }, []);

  return (
    <div className="ui centered olive card">
      <div className="content">
        <div className="header">{question}</div>
      </div>
      <div className="content">
        <form className="ui sub header" onSubmit={handleSubmit}>
          <label>
            <h4>{option1}</h4>
            <input
              checked={selectedOption === "option1"}
              onChange={() => {
                setSelectedOption("option1");
              }}
              id="answer-a"
              value="option1"
              type="radio"
              name="answer"
              className="answer"
            />
          </label>
          <br />
          <label>
            <h4>{option2}</h4>
            <input
              checked={selectedOption === "option2"}
              onChange={() => {
                setSelectedOption("option2");
              }}
              id="answer-b"
              value="option2"
              type="radio"
              name="answer"
              className="answer"
            />
          </label>
          <br />
          <label>
            <input className="ui button" type="submit"></input>
          </label>
        </form>
      </div>
      <div className="content">
        <h4 className="ui sub header">Submitted By: {creator} </h4>
      </div>
      <div className="extra content">
        <h4 className="ui sub header">Reward: {reward}</h4>
      </div>
    </div>
  );
}

export default SurveyPage;

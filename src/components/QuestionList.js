import React, { useState } from "react";
import QuestionStats from "./QuestionStats.js";
import SurveyPage from "./SurveyPage.js";
import QuestionCard from "./QuestionCard.js";

const QuestionList = ({ queryArr, currentUser }) => {
  const [questionsIndex, setQuestionsIndex] = useState(0)
  const questions = queryArr.map((query) => {
    return <QuestionCard currentUser={currentUser} key={query.id} questionStats={query} />;
  });

  const handleBack = () => {
    setQuestionsIndex(questionsIndex - 1)
  };

  const handleForward = () => {
    setQuestionsIndex(questionsIndex + 1)
  };

  return (
    <div className="ui grid">
      <div className="three wide centered column"></div>
      <div className="one wide centered column">
        {questionsIndex > 0 && (<button className="ui icon button" onClick={handleBack}>
          <i className="angle left icon"></i>
        </button>)}
      </div>
      <div className="six wide centered column">{questions[questionsIndex]}</div>
      <div className="five wide column">
        {questionsIndex < questions.length -1 && (<button className="ui icon button" onClick={handleForward}>
          <i className="angle right icon"></i>
        </button>)}
      </div>
      <div className="two wide centered column"></div>
    </div>
  );
};

export default QuestionList;

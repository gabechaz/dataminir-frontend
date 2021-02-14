import React, { useState } from "react";
import QuestionStats from "./QuestionStats.js";
import SurveyPage from "./SurveyPage.js";
import QuestionCard from "./QuestionCard.js";

const QuestionList = ({ queryArr }) => {
  const [questionsIndex, setQuestionsIndex] = useState(0)
  const questions = queryArr.map((query) => {
    return <QuestionCard key={query.id} questionStats={query} />;
  });

  const handleBack = () => {
    setQuestionsIndex(questionsIndex - 1)
  };

  const handleForward = () => {
    setQuestionsIndex(questionsIndex + 1)
  };

  return (
    <div className="ui grid">
      <div className="two wide centered column"></div>
      <div className="two wide centered column">
        <button className="ui icon button" onClick={handleBack}>
          <i class="angle left icon"></i>
        </button>
      </div>
      <div className="eight wide centered column">{questions[questionsIndex]}</div>
      <div className="two wide column">
        <button className="ui icon button" onClick={handleForward}>
          <i class="angle right icon"></i>
        </button>
      </div>
      <div className="two wide centered column"></div>
    </div>
  );
};

export default QuestionList;

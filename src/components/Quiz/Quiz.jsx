import { useState } from "react";
import "./style.scss";
import questions from "./questions.json";
import { Result } from "./Result.jsx";
import { Game } from "./Game.jsx";

function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (e, index) => {
    // console.log("e:", e.target.classList);
    setStep(step + 1);
    if (index === question.correct) {
      e.target.classList.add("correct");
      setCorrect(correct + 1);
    } else {
      e.target.classList.add("wrong");
    }
  };
  return (
    <div className="App-quiz">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default Quiz;

import React, { FC, useState } from "react";
import "./ChooseCorrectTranslationItem.css";
import { IAnswer, IChooseCorrectTranslation } from "../types";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestionAnswer,
  getQuestionAnswers,
} from "../store/slices/chooseCorrectTranslationSlice";

interface ChooseCorrectTranslationItemProps {
  item: IChooseCorrectTranslation;
  isFinish?: boolean;
}

const ChooseCorrectTranslationItem: FC<ChooseCorrectTranslationItemProps> = ({
  item,
  isFinish,
}) => {
  const dispatch = useDispatch();

  const questionAnswers = useSelector(getQuestionAnswers);

  const [currentAnswer, setCurrentAnswer] = useState<IAnswer | null>(null);

  const selectAnswer = (id: string | number) => {
    if (isFinish) {
      if (questionAnswers.some((answer: IAnswer) => answer.id === id)) {
        return id === item.correctAnswer.id
          ? "correct-answer"
          : "incorrect-answer";
      }
      if (id === item.correctAnswer.id) {
        return "correct-answer";
      }

      return null;
    }
    return questionAnswers.some((answer: IAnswer) => answer.id === id)
      ? "correct-answer"
      : null;
  };

  const changeHandler = (answer: IAnswer) => {
    setCurrentAnswer(answer);
    dispatch(addQuestionAnswer({ answer, currentAnswer }));
  };
  return (
    <div className={"choose-correct-translation-item"}>
      <div className={"choose-correct-translation-item--question"}>
        <span>{item.question}</span>
      </div>
      <div className={"choose-correct-translation-item--options"}>
        <div className={"choose-correct-translation-item--answers"}>
          <div
            className={`choose-correct-translation-item--answer-block ${selectAnswer(
              item.answer1.id
            )}`}
            onClick={() => !isFinish && changeHandler(item.answer1)}
          >
            <span className={`choose-correct-translation-item--option-name`}>
              A
            </span>
            <span>{item.answer1.answer}</span>
          </div>
          <div
            className={`choose-correct-translation-item--answer-block ${selectAnswer(
              item.answer2.id
            )}`}
            onClick={() => !isFinish && changeHandler(item.answer2)}
          >
            <span className={`choose-correct-translation-item--option-name`}>
              B
            </span>
            <span>{item.answer2.answer}</span>
          </div>
        </div>
        <div className={"choose-correct-translation-item--answers"}>
          <div
            className={`choose-correct-translation-item--answer-block ${selectAnswer(
              item.answer3.id
            )}`}
            onClick={() => !isFinish && changeHandler(item.answer3)}
          >
            <span className={"choose-correct-translation-item--option-name"}>
              C
            </span>
            <span>{item.answer3.answer}</span>
          </div>
          <div
            className={`choose-correct-translation-item--answer-block ${selectAnswer(
              item.answer4.id
            )}`}
            onClick={() => !isFinish && changeHandler(item.answer4)}
          >
            <span className={"choose-correct-translation-item--option-name"}>
              D
            </span>
            <span>{item.answer4.answer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCorrectTranslationItem;

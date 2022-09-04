import { useCallback, useEffect, useState } from "react";
import "./ChooseCorrectTranslation.css";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import Timer from "./Timer";
import CarouselSlider from "./CarouselSlider";
import { IChooseCorrectTranslation } from "../types";
import { resetQuestionAnswers } from "../store/slices/chooseCorrectTranslationSlice";
import { data } from "../dummyData";

const ChooseCorrectTranslation = () => {
  const dispatch = useDispatch();

  const [isStartQuiz, setIsStartQuiz] = useState<boolean>(false);
  const [isFinishQuiz, setIsFinishQuiz] = useState<boolean>(false);
  const [words] = useState<IChooseCorrectTranslation[]>(data);

  const startQuiz = () => {
    setIsStartQuiz(true);
    setIsFinishQuiz(false);
  };

  const finishQuiz = useCallback(() => {
    setIsStartQuiz(false);
    setIsFinishQuiz(true);
  }, []);

  useEffect(() => {
    dispatch(resetQuestionAnswers());
  }, [dispatch]);

  return (
    <div className={"choose-correct-translation"}>
      {isStartQuiz ? (
        <>
          <Timer finishQuiz={finishQuiz} />
          <CarouselSlider type={"quiz1"} data={words} />
          <div className={"choose-correct-translation--btn"}>
            <Button type="primary" block onClick={finishQuiz}>
              Finish
            </Button>
          </div>
        </>
      ) : (
        <div className={"choose-correct-translation--btn"}>
          <Button type="primary" block onClick={startQuiz}>
            Start
          </Button>
        </div>
      )}
      {isFinishQuiz ? (
        <CarouselSlider type={"quiz1"} data={words} isFinish={true} />
      ) : null}
    </div>
  );
};

export default ChooseCorrectTranslation;

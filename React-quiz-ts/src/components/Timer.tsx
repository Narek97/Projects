import { FC, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import "./Timer.css";
import { useSelector } from "react-redux";
import { getWordsCount } from "../store/slices/chooseCorrectTranslationSlice";

interface TimerProps {
  finishQuiz: () => void;
}

const Timer: FC<TimerProps> = ({ finishQuiz }) => {
  const wordCount = useSelector(getWordsCount);

  const time = new Date();
  time.setSeconds(time.getSeconds() + (60 * +wordCount) / 10);

  const { seconds, minutes } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      finishQuiz();
    }
  }, [finishQuiz, minutes, seconds]);

  return (
    <div className={"my-timer"}>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default Timer;

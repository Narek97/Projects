import React from "react";
import QuizTab from "../components/QuizTab";
import SelectCountry from "../components/SelectCountry";

const Quiz = () => {
  return (
    <div className={"quiz"}>
        <SelectCountry />
        <QuizTab />
    </div>
  );
};

export default Quiz;

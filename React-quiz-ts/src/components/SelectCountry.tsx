import { useState } from "react";
import "./SelectCountry.css";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryOne,
  getCountryTwo,
  getWordsCount,
  onSelectCountryOne,
  onSelectCountryTwo,
  onSelectWordsCount,
} from "../store/slices/chooseCorrectTranslationSlice";

const { Option } = Select;

const SelectCountry = () => {
  const dispatch = useDispatch();

  const countryOne = useSelector(getCountryOne);
  const countryTwo = useSelector(getCountryTwo);
  const wordCount = useSelector(getWordsCount);

  const [selectCountryOne, setSelectCountryOne] = useState<string>(countryOne);
  const [selectCountryTwo, setSelectCountryTwo] = useState<string>(countryTwo);

  const [wordsCount, setWordsCount] = useState<string>(wordCount);

  type typeOption = {
    [key: string]: string;
  };

  const switchCountry: typeOption = {
    armenia: "english",
    english: "armenia",
  };

  const handleChange = (value: string, name: string) => {
    if (name === "english") {
      setSelectCountryOne(value);
      setSelectCountryTwo(switchCountry[value]);
      dispatch(onSelectCountryOne(value));
      dispatch(onSelectCountryTwo(switchCountry[value]));
    }
    if (name === "armenia") {
      setSelectCountryTwo(value);
      setSelectCountryOne(switchCountry[value]);
      dispatch(onSelectCountryOne(switchCountry[value]));
      dispatch(onSelectCountryTwo(value));
    }
  };

  const handleChangeWordsCount = (value: string) => {
    setWordsCount(value);
    dispatch(onSelectWordsCount(value));
  };

  return (
    <div className={"select-country"}>
      <div className={"select-country--selections"}>
        <Select
          value={selectCountryOne}
          style={{ width: 120 }}
          onChange={(e) => handleChange(e, "english")}
        >
          <Option value="english">English</Option>
          <Option value="armenia">Armenia</Option>
        </Select>

        <div className={"select-country--to"}>To</div>

        <Select
          value={selectCountryTwo}
          style={{ width: 120 }}
          onChange={(e) => handleChange(e, "armenia")}
        >
          <Option value="english">English</Option>
          <Option value="armenia">Armenia</Option>
        </Select>
      </div>
      <div className={"select-country--words-count"}>
        <p>Words count</p>
        <Select
          value={wordsCount}
          style={{ width: 120 }}
          onChange={handleChangeWordsCount}
        >
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="30">30</Option>
          <Option value="40">40</Option>
          <Option value="50">50</Option>
          <Option value="60">60</Option>
          <Option value="70">70</Option>
          <Option value="80">80</Option>
          <Option value="90">90</Option>
          <Option value="100">100</Option>
        </Select>
      </div>
    </div>
  );
};

export default SelectCountry;

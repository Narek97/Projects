import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IAnswer } from "../../types";

export interface initialStateProps {
  countryOne: string;
  countryTwo: string;
  wordsCount: string;
  questionAnswers: IAnswer[];
}

const initialState: initialStateProps = {
  countryOne: "english",
  countryTwo: "armenia",
  wordsCount: "10",
  questionAnswers: [],
};

export const chooseCorrectTranslationSlice = createSlice({
  name: "chooseCorrectTranslation",
  initialState,
  reducers: {
    onSelectCountryOne: (state, action: PayloadAction<string>) => {
      state.countryOne = action.payload;
    },
    onSelectCountryTwo: (state, action: PayloadAction<string>) => {
      state.countryTwo = action.payload;
    },
    onSelectWordsCount: (state, action: PayloadAction<string>) => {
      state.wordsCount = action.payload;
    },
    addQuestionAnswer: (
      state,
      action: PayloadAction<{ answer: IAnswer; currentAnswer: IAnswer | null }>
    ) => {
      let data = state.questionAnswers;

      if (action.payload.currentAnswer) {
        data = data.filter(
          (item) => item.id !== action.payload.currentAnswer?.id
        );
      }
      state.questionAnswers = [...data, action.payload.answer];
    },
    resetQuestionAnswers: (state) => {
      state.questionAnswers = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSelectCountryOne,
  onSelectCountryTwo,
  onSelectWordsCount,
  addQuestionAnswer,
  resetQuestionAnswers,
} = chooseCorrectTranslationSlice.actions;

export const getCountryOne = (state: RootState) =>
  state.chooseCorrectTranslation.countryOne;
export const getCountryTwo = (state: RootState) =>
  state.chooseCorrectTranslation.countryTwo;
export const getWordsCount = (state: RootState) =>
  state.chooseCorrectTranslation.wordsCount;
export const getQuestionAnswers = (state: RootState) =>
  state.chooseCorrectTranslation.questionAnswers;

export default chooseCorrectTranslationSlice.reducer;

export interface IAddWord {
  english: string;
  armenian: string;
}

export  type ID = {
  id: string | number;
};

export interface IAnswer extends ID {
  answer: string;
}

export interface IChooseCorrectTranslation extends ID {
  question: string;
  answer1: IAnswer;
  answer2: IAnswer;
  answer3: IAnswer;
  answer4: IAnswer;
  correctAnswer: IAnswer;
}

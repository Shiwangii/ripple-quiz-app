export type MCQType = {
    _id: string;
    question: string;
    options: Array<string>;
    answer: string;
  }
  
  export type QuizDataType = {
    _id: string;
    title: string;
    totalScore: number;
    description: string;
    imageURL: string;
    mcqs: Array<MCQType>;
    categoryName: string;
    createdBy: string;
  }
  
  export type QuizState = {
    quizzes: Array<QuizDataType> | [];
      filterQuizData: Array<QuizDataType>;
  }
  
  export type QuizActionType = 
    | {
      type: "REMOVE_QUIZ";
      payload: {
        quizzes: Array<QuizDataType>;
      }
    }
    | {
      type: "GET_QUIZ";
      payload: {
        quizzes: Array<QuizDataType>;
        filterQuizData: Array<QuizDataType>;
      }
    }
    | {
      type: "FILTER_QUIZ_DATA";
      payload: {
        filterQuizData: Array<QuizDataType>;
      }
    }
  
  export type RulesType = {
    _id: string;
    rule: string;
  }
  
  export type CategoryType = {
    _id: string;
    categoryName: string;
    description: string;
  }
  
  export type QuizCtxType = {
    quizState: QuizState;
    quizDispatch: (arg0: QuizActionType) => void;
    categoriesData: Array<CategoryType>;
    rulesData: Array<RulesType>;
  }
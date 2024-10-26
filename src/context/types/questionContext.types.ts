export type QuestionState = {
    quizId: string;
    questions: any;
    score: number;
  }
  
  export type QuestionActionType  = 
    | {
      type: "SET_QUIZ_ID";
      payload: {
        quizId: string;
      }
    }
    | {
      type: "SELECT_NEW_ANSWER";
      payload: {
        questions: any;
      }
    }
    | {
      type: "UPDATE_SCORE";
      payload: {
        score: number;
      }
    }
    | {
      type: "RESET";
    }
  
  export type QuestionCtxType = {
    questionState: QuestionState;
    questionDispatch: (arg0: QuestionActionType) => void;
  }
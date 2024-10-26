import React, { createContext, useContext, useReducer } from "react";
import { questionReducer } from "../reducers";
import { QuestionCtxType, QuestionState } from "./types";
const defaultQuestionState: QuestionState = {
	quizId: "",
	questions: {},
	score: 0,
};
const QuestionContext = createContext({} as QuestionCtxType);

const QuestionProvider = ({ children }: {children: React.ReactNode}) => {
	const [questionState, questionDispatch] = useReducer(
		questionReducer,
		defaultQuestionState
	);

	return (
		<QuestionContext.Provider value={{ questionState, questionDispatch }}>
			{children}
		</QuestionContext.Provider>
	);
};

const useQuestion = () => useContext(QuestionContext);

export { QuestionProvider, useQuestion };

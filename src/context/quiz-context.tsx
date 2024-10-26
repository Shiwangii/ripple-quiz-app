import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useGetCategoriesData, useGetRulesData } from "../custom-hooks";
import { quizReducer } from "../reducers";
import { getQuizDataHandler } from "../utils";
import { QuizCtxType, QuizState } from "./types";
const defaultQuizState: QuizState = {
	quizzes: [],
	filterQuizData: [],
};
const QuizContext = createContext({} as QuizCtxType);

const QuizProvider = ({ children }: {children: React.ReactNode}) => {
	const categoriesData = useGetCategoriesData();
	const [quizState, quizDispatch] = useReducer(quizReducer, defaultQuizState);
	const rulesData = useGetRulesData();
	useEffect(() => getQuizDataHandler(quizDispatch), []);

	return (
		<QuizContext.Provider
			value={{ categoriesData, quizState, quizDispatch, rulesData }}
		>
			{children}
		</QuizContext.Provider>
	);
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };

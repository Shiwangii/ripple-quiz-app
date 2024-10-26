import { QuizActionType, QuizState } from "context";
/**
 * Reducer function to handle quizzes state
 * @param {Object} quizState State values of quizzes
 * @param {*} quizzesAction The changed state
 * @returns Updated state into quizState
 */
const quizReducer = (quizState: QuizState, action: QuizActionType): QuizState => {
	switch (action.type) {
		case "REMOVE_QUIZ":
			return {
				...quizState,
				quizzes: [...action.payload.quizzes],
			};
		case "GET_QUIZ":
			return {
				...quizState,
				quizzes: [...action.payload.quizzes],
				filterQuizData: [...action.payload.filterQuizData],
			};
		case "FILTER_QUIZ_DATA":
			return {
				...quizState,
				filterQuizData: [...action.payload.filterQuizData],
			};
		default:
			return quizState;
	}
};

export { quizReducer };

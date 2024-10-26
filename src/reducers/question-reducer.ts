import { QuestionActionType, QuestionState } from "context";

/**
 * Reducer function to handle questionzes state
 * @param {Object} questionState State values of questionzes
 * @param {*} questionzesAction The changed state
 * @returns Updated state into questionState
 */
const questionReducer = (questionState: QuestionState, action: QuestionActionType): QuestionState => {
	switch (action.type) {
		case "SET_QUIZ_ID":
			return {
				...questionState,
				quizId: action.payload.quizId,
			};
		case "SELECT_NEW_ANSWER":
			return {
				...questionState,
				questions: { ...questionState.questions, ...action.payload.questions },
			};
		case "UPDATE_SCORE":
			return {
				...questionState,
				score: questionState.score + action.payload.score,
			};
		case "RESET":
			return {
				...questionState,
				quizId: "",
				questions: {},
				score: 0,
			};
		default:
			return questionState;
	}
};

export { questionReducer };

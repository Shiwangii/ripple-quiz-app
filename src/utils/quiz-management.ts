import axios from "axios";

/**
 * Retrieve quiz data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} quizDispatch Reducer function
 */
const getQuizDataHandler = (quizDispatch: any) => {
	(async () => {
		try {
			const response = await axios.get(`/api/quizzes`);
			quizDispatch({
				type: "GET_QUIZ",
				payload: {
					quizzes: response.data.quizes,
					filterQuizData: response.data.quizes,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export { getQuizDataHandler };

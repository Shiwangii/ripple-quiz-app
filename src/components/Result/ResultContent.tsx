import { MCQType, QuizDataType, useQuestion, useQuiz } from "context";
import { useNavigate } from "react-router-dom";
const ResultContent = () => {
	const { questionState, questionDispatch } = useQuestion();
	const { quizState } = useQuiz();
	const quizData = quizState.quizzes.length
		? quizState.quizzes.filter((item: QuizDataType) => item._id === questionState.quizId)[0]
		: {
				_id: "",
				title: "",
				totalScore: 0,
				description: "",
				imageURL: "",
				mcqs: [],
				categoryName: "",
				createdBy: "",
		  };
	const navigate = useNavigate();
	const handleRedirect = () => {
		questionDispatch({ type: "RESET" });
		navigate("/quizzes");
	};
	return (
		<main className="main">
			<section className="flex-column flex-gap-1 w-100 h-auto">
				<h2 className="card-title text-bold p-5 my-2 text-cta-color text-center">
					Result
				</h2>
				<section className="flex-row justify-content-center flex-gap-2">
					<h4 className="p-2">
						<i className="text-bold">Final Score:</i> {questionState.score}/
						{quizData.mcqs.length * 10}
					</h4>
				</section>
				{quizData &&
					quizData.mcqs.map(({ _id, question, options, answer }: MCQType) => (
						<section className="p-5 m-5" key={_id}>
							<p className="text-bold p-2">{question}</p>
							<ul className="stacked-list flex-column flex-gap-1 align-center w-100 h-auto">
								{options.map((item, index) => (
									<li className="no-list w-100 h-auto" key={index}>
										<article
											className={`basic-card flex-row justify-content-center align-center flex-gap-1 flex-wrap p-5 b-radius-3 my-2 cursor-pointer w-100 h-auto ${
												questionState.questions[_id] === item
													? item === answer
														? "right-answer"
														: "wrong-answer"
													: ""
											}`}
										>
											<h3>{item}</h3>
										</article>
									</li>
								))}
							</ul>
						</section>
					))}
				<section className="quiz-container"></section>
				<button
					className="no-link-decoration outline-btn p-5 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow w-100 h-auto my-10 cursor-pointer"
					onClick={handleRedirect}
				>
					Play Another Quiz
				</button>
			</section>
		</main>
	);
};
export { ResultContent };

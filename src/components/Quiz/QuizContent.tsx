import { QuizDataType, useQuestion, useQuiz } from "context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const QuizContent = () => {
	const navigate = useNavigate();
	const { quizState } = useQuiz();
	const { questionState, questionDispatch } = useQuestion();
	const quizData: QuizDataType = quizState.quizzes.length
		? quizState.quizzes.filter(
				(item: QuizDataType) => item._id === questionState.quizId
		  )[0]
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
	const [questionIndex, setQuestionIndex] = useState(0);
	const handleNextQuestion = () => {
		setQuestionIndex(questionIndex + 1);
	};

	const handleCalculateScore = () => {
		let score = 0;
		for (let i = 0; i <= questionIndex; i++) {
			score +=
				quizData["mcqs"][i]["answer"] ===
				questionState.questions[quizData["mcqs"][i]["_id"]]
					? 10
					: 0;
		}
		questionDispatch({ type: "UPDATE_SCORE", payload: { score: score } });
		navigate("/result");
	};
	const handleQuitQuiz = () => {
		questionDispatch({ type: "RESET" });
		navigate("/quizzes");
	};
	return (
		<main className="main">
			{quizData._id.length && (
				<section className="flex-column flex-gap-1 w-100 h-auto w-50">
					<h3 className="card-title text-bold p-5 my-2 text-cta-color text-center">
						{quizData.title}
					</h3>
					{
						<section key={quizData.mcqs[questionIndex]._id}>
							<section className="flex-row justify-content-space-between flex-gap-2">
								<h5 className="p-2">
									<i className="text-bold">Question:</i> {questionIndex + 1}/
									{quizData.mcqs.length}
								</h5>
								<button
									className="outline-btn p-2 b-radius-2 mx-5 cursor-pointer"
									onClick={handleQuitQuiz}
								>
									Quit Quiz
								</button>
							</section>
							<p className="text-bold p-2">
								{quizData.mcqs[questionIndex].question}
							</p>
							<ul className="stacked-list flex-column flex-gap-1 align-center w-100 h-auto">
								{quizData.mcqs[questionIndex].options.map(
									(item: string, index: number) => (
										<li className="no-list w-100 h-auto" key={index}>
											<label
												className={`basic-card flex-row justify-content-center align-center flex-gap-1 flex-wrap p-5 b-radius-3 my-2 cursor-pointer w-100 h-auto ${
													questionState.questions[
														quizData["mcqs"][questionIndex]["_id"]
													] === item
														? "selected-answer"
														: ""
												}`}
											>
												<input
													className="filters"
													type="radio"
													name="selectAnswer"
													value={item}
													checked={
														questionState.questions[
															quizData["mcqs"][questionIndex]["_id"]
														] === item
															? true
															: false
													}
													onChange={() => {
														const question: any = {};
														const key = quizData["mcqs"][questionIndex]["_id"];
														question[key] = item;
														questionDispatch({
															payload: { questions: { ...question } },
															type: "SELECT_NEW_ANSWER",
														});
													}}
												/>
												<h3>{item}</h3>
											</label>
										</li>
									)
								)}
							</ul>
							<section className="flex-row justify-content-end">
								{questionIndex < quizData.mcqs.length - 1 ? (
									<div
										onClick={handleNextQuestion}
										className="rui-main-nav-links no-link cursor-pointer"
									>
										Next <i className="fas fa-angle-right main-nav-icon"></i>
									</div>
								) : (
									<button
										onClick={handleCalculateScore}
										className="no-link-decoration primary-btn p-3 m-5 b-radius-2 cursor-pointer"
									>
										Finish Quiz
									</button>
								)}
							</section>
						</section>
					}
				</section>
			)}
		</main>
	);
};
export { QuizContent };

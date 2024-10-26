import { QuizDataType, useQuestion, useQuiz } from "context";
import { useNavigate } from "react-router-dom";
const Quizzes = () => {
	const navigate = useNavigate();
	const { categoriesData, quizState } = useQuiz();
	const { questionDispatch } = useQuestion();
	const getQuizDataFromCategory = (categoryName: string) =>
		quizState.filterQuizData.filter(
			(item: any) => item.categoryName === categoryName);
	const handleSetQuizId = (_id: string) => {
		questionDispatch({ type: "SET_QUIZ_ID", payload: { quizId: _id } });
		navigate("/rules");
	};

	return (
		<div className="m-5 p-5">
			{categoriesData.length &&
				quizState.filterQuizData.length &&
				categoriesData.map(({ _id, categoryName }: {_id: string, categoryName: string}) => {
					return (
						<section key={_id}>
							<section className="quiz-container flex-row justify-content-space-between align-center p-7 w-100">
								<h2 className="text-bold">{categoryName} Quiz</h2>
							</section>
							<section className="flex-row flex-wrap justify-align-center align-center flex-gap-2">
								{getQuizDataFromCategory(categoryName)?.map(
									({ _id, title, description, imageURL }: QuizDataType) => (
										<article
											key={_id}
											className="card vertical card-shadow p-5 b-radius-2 mt-10"
										>
											<section className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
												<img
													src={imageURL}
													alt="Quiz topic image"
													className="card-image b-radius-2 mt-2"
												/>
											</section>
											<section className="card-content p-5 pb-0 text-center">
												<h3 className="card-title text-bold p-5 my-2 text-cta-color">
													{title}
												</h3>
												<p className="card-category my-2">{description}</p>
											</section>
											<section className="flex-row flex-gap-1 justify-content-center align-center w-100">
												<button
													onClick={() => handleSetQuizId(_id)}
													className="no-link-decoration primary-btn p-5 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow w-100 h-auto text-tertiary-color cursor-pointer"
												>
													Play
												</button>
											</section>
										</article>
									)
								)}
							</section>
						</section>
					);
				})}
		</div>
	);
};

export { Quizzes };

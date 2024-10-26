import { useEffect, useState } from "react";
import { CategoriesLoader, Quizzes } from ".";
import { useQuiz } from "../../context";
const QuizCategoriesContent = () => {
	const [loader, setLoader] = useState<boolean>(true);
	const { quizState } = useQuiz();
	useEffect(
		() => {
			quizState?.quizzes?.length
				? setTimeout(() => setLoader(false), 100)
				: setLoader(true)
		},
		[quizState]
	);
	return (
		<main className="main">
			<section className="mx-10">
				{!loader && <Quizzes />}
				{loader && <CategoriesLoader />}
			</section>
		</main>
	);
};
export { QuizCategoriesContent };

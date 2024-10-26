import { useAuth } from "context";
import { Link } from "react-router-dom";
const CreateGame = () => {
	const { authState } = useAuth();
	return (
		<article className="flex-row justify-content-center align-center flex-wrap p-5 b-radius-2 text-center ">
			<h2 className="text-bold m-2 my-5 w-100 h-auto">Play a Game</h2>
			<sub className="homepage-subheading m-2 w-100 h-auto">
				{authState?.token
					? "Explore all the fun quiz we have"
					: "You need an account to play quiz"}
			</sub>
			<Link
				to={"/quizzes"}
				className="no-link-decoration primary-btn p-5 b-radius-2 m-2 text-bold w-100 h-auto text-tertiary-color"
			>
				{authState?.token ? "Play Quiz" : "Login/Register"}
			</Link>
		</article>
	);
};

export { CreateGame };

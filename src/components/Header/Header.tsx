import { useAuth, useQuiz, useTheme } from "context";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const { themeIcon, handleSetTheme } = useTheme();
	const { authState } = useAuth();
	const [query, setQuery] = useState("");
	const { quizState, quizDispatch } = useQuiz();
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};
	useEffect(() => {
		quizDispatch({
			type: "FILTER_QUIZ_DATA",
			payload: {
				filterQuizData: query.length
					? quizState.quizzes.filter(({ title }: {title: string}) =>
							title.toLowerCase().includes(query.toLowerCase())
					  )
					: quizState.quizzes,
			},
		});
	}, [query]);

	return (
		<header className="header header-shadow flex-row justify-content-space-between align-center p-7">
			<div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
				<Link to={"/quizzes"} className="no-link header-brand">
					<img
						src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
						alt="Logo of ripple UI"
						className="brand-logo"
					/>
					<sub className="brand-name">Ripple Quiz</sub>
				</Link>
			</div>
			<div className="social-icon-container flex-row align-center flex-gap-2">
				{authState.token && (
					<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap h-auto w-100 search-bar-long">
						<section className="input-container input-with-icon flex-column b-radius-2 m-5">
							<input
								id="search"
								className="textbox-content p-5"
								type="text"
								name="search"
								placeholder="Search"
								aria-label="Search Products here"
								onChange={handleSearch}
								value={query}
							/>
							<i className="fas fa-search search-icon"></i>
						</section>
					</form>
				)}
				{authState.token && (
					<Link to={"/profile"} className="no-link">
						<img
							src={authState.avatar}
							alt="User Profile Picture"
							className="avatar b-radius-circle m cursor-pointer"
							aria-label="User Profile Avatar"
						/>
					</Link>
				)}
				<i
					className={`fas fa-${themeIcon} theme-icon badge-icon`}
					aria-label="dark/light theme icon"
					onClick={handleSetTheme}
				></i>
			</div>
		</header>
	);
};

export { Header };

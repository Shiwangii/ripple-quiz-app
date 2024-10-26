const CategoriesLoader = () => {
	return (
		<div className="m-5 p-5">
			{Array.from({ length: 3 }).map((item, index) => (
				<section key={`category ${index}`}>
					<section className="quiz-container flex-row justify-content-center align-center p-7 w-100">
						<h2 className="text-bold b-radius-2 category-title-loader"></h2>
					</section>
					<section className="flex-row flex-wrap justify-align-center align-center flex-gap-2">
						{Array.from({ length: 3 }).map((item, index) => (
							<article
								className="card vertical card-shadow p-5 b-radius-2 mt-10"
								key={index}
							>
								<section className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2 quiz-card-image-loader"></section>
								<section className="card-content p-5 pb-0 text-center">
									<h3 className="quiz-card-title-loader b-radius-2"></h3>
									<p className="card-category mt-5 quiz-card-title-loader b-radius-2"></p>
								</section>
								<section className="flex-row flex-gap-1 justify-content-center align-center w-100">
									<div className="no-link-decoration p-7 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow quiz-card-button-loader"></div>
								</section>
							</article>
						))}
					</section>
				</section>
			))}
		</div>
	);
};
export { CategoriesLoader };

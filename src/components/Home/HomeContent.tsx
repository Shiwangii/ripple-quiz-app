import { HomeTabs } from ".";

const HomeContent = () => {
	return (
		<main className="main flex-column align-center justify-content-center p-10">
			<div className="flex-column align-center text-center">
				<div className="homepage-heading">
					<i className="text-cta-color">Ripple Quiz</i>
				</div>
			</div>
			<HomeTabs />
		</main>
	);
};
export { HomeContent };

import { Model, RestSerializer, Server } from "miragejs";
import {
    checkToken,
    loginHandler,
    signupHandler,
} from "./backend/controllers/AuthController";
import { getAvatarsHandler } from "./backend/controllers/AvatarsController";
import {
    getAllCategoriesHandler,
    getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
    getAllQuizesHandler,
    getSingleQuizHandler,
    getSingleQuizQuestionAnswer,
    postQuizResultHandler,
} from "./backend/controllers/QuizesController";
import { getRulesHandler } from "./backend/controllers/RulesController";
import { editUserHandler } from "./backend/controllers/UserController";
import { avatars } from "./backend/db/avatars";
import { categories } from "./backend/db/categories";
import { quizzes } from "./backend/db/quizzes";
import { rules } from "./backend/db/rules";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
	return new Server({
		serializers: {
			application: RestSerializer,
		},
		environment,
		models: {
			quiz: Model,
			category: Model,
			user: Model,
			totalScore: Model,
			knowledgeLevel: Model,
			quizTaken: Model,
			avatars: Model,
			rules: Model,
		},

		// Runs on the start of the server
		seeds(server) {
			// disballing console logs from Mirage
			server.logging = false;
			quizzes.forEach((item) => server.create("quiz", { ...item }));
			avatars.forEach((item) => server.create("avatar", { ...item }));
			rules.forEach((item) => server.create("rule", { ...item }));

			users.forEach((item) =>
				server.create("user", {
					...item,
					totalScore: { current: 0 },
					knowledgeLevel: { current: "rookie" },
					quizTaken: [],
				})
			);

			categories.forEach((item) => server.create("category", { ...item }));
		},

		routes() {
			this.namespace = "api";
			// auth routes (public)
			this.post("/auth/signup", signupHandler.bind(this));
			this.post("/auth/login", loginHandler.bind(this));

			// user routes (private)
			this.post("/user", editUserHandler.bind(this));

			// avatars routes (public)
			this.get("/avatars", getAvatarsHandler.bind(this));

			// rules routes (public)
			this.get("/rules", getRulesHandler.bind(this));

			//check token (private)
			this.post("/auth/checktoken", checkToken.bind(this));

			// quizes routes (public)
			this.get("/quizzes", getAllQuizesHandler.bind(this));
			this.get("/quizzes/:quizId", getSingleQuizHandler.bind(this));
			this.get(
				"/quizzes/:quizId/:questionId",
				getSingleQuizQuestionAnswer.bind(this)
			);

			// categories routes (public)
			this.get("/categories", getAllCategoriesHandler.bind(this));
			this.get("/categories/:categoryId", getCategoryHandler.bind(this));

			// quizes routes (private)
			this.post("/quizzes/result", postQuizResultHandler.bind(this));
		},
	});
}
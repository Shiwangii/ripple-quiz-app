import { MCQType } from "context";
import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

export const getAllQuizesHandler = function (this: any) {
	return new Response(200, {}, { quizes: this.db.quizzes });
};

export const getSingleQuizHandler = function (schema: any, request: any) {
	const Id = request.params.quizId;
	try {
		const quiz = schema.quizzes.findBy({ _id: Id });
		return new Response(200, {}, { quiz });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

export const getSingleQuizQuestionAnswer = function (schema: any, request: any) {
	const quizId = request.params.quizId;
	const questionId = request.params.questionId;
	try {
		const quiz = schema.quizzes.findBy({ _id: quizId });
		const question = quiz.mcqs.find((item: MCQType) => item._id === questionId);
		return new Response(200, {}, { question });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

export const postQuizResultHandler = function (this: any, schema: any, request: any) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			return new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const { score, quizTaken } = JSON.parse(request.requestBody);
		if (!schema.quizzes.findBy({ _id: quizTaken._id })) {
			return new Response(
				404,
				{},
				{ result: "this quiz is not present in the server" }
			);
		}
		const user = schema.users.findBy({ _id: userId });
		const newUserScore =
			Number(score) > 0
				? Number(score) + Number(user.totalScore.current)
				: Number(user.totalScore.current);
		const knowledgeLevel =
			newUserScore >= 15
				? newUserScore >= 25
					? "Expert"
					: "Amateur"
				: "Rookie";
		const quizTakenByUser = user.quizTaken;
		quizTakenByUser.push({ ...quizTaken });
		this.db.users.update(
			{ _id: userId },
			{
				totalScore: { current: newUserScore },
				knowledgeLevel: { current: knowledgeLevel },
				quizTaken: quizTakenByUser,
			}
		);
		return new Response(201, {}, { user });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
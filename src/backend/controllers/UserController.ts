import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to user are present here.
 * These are Privately accessible routes.
 * */

/**
 * This handler handles editing user data.
 * send PUT Request at /api/user
 * body contains {userData}
 * */

export const editUserHandler = function (this: any, schema: any, request: any) {
	const user : any = requiresAuth.call(this, request);
	if (!user) {
		return new Response(
			404,
			{},
			{
				errors: ["The email you entered is not Registered. Not Found error"],
			}
		);
	}
	const { userData } = JSON.parse(request.requestBody);
	this.db.users.update({ _id: user._id }, { ...user, ...userData });
	return new Response(200, {}, { user: user });
};
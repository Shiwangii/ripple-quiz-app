import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { Response } from "miragejs";
import { UserType } from "types";

export const requiresAuth = function (this: any, request: any) {
	const encodedToken : any = request.requestHeaders.authorization;
	const decodedToken: any = jwt_decode(
		encodedToken
	);
	if (decodedToken) {
		const user : UserType = this.db.users.findBy({ email: decodedToken.email });
		if (user) {
			return user;
		}
	}
	return new Response(
		401,
		{},
		{ errors: ["The token is invalid. Unauthorized access error."] }
	);
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
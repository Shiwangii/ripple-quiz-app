import { UserType } from "types";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users: Array<UserType> = [
	{
		_id: "4ea212a8-c0d7-11ec-9d64-0242ac120002",
		firstName: "Shreyas",
		lastName: "Soni",
		email: "sonishreyas10@gmail.com",
		password: "Shreyas",
		avatar:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/avatars/1.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
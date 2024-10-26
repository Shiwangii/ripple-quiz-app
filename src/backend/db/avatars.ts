import { AvatarDataType } from "context";
import { v4 as uuid } from "uuid";
export const avatars: Array<AvatarDataType> = [
	{
		_id: uuid(),
		avatarURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/avatars/1.jpg",
	},
	{
		_id: uuid(),
		avatarURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/avatars/2.jpg",
	},
	{
		_id: uuid(),
		avatarURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/avatars/3.jpg",
	},
];
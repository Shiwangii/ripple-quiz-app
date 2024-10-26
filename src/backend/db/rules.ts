import { RulesType } from "context";
import { v4 as uuid } from "uuid";
export const rules: Array<RulesType> = [
	{
		_id: uuid(),
		rule: "A team gets 30 seconds to answer the question intended for it, and is awarded 20 points for answering it.",
	},
	{
		_id: uuid(),
		rule: "You can quit the quiz anytime you want. Use the quit quiz button.",
	},
	{
		_id: uuid(),
		rule: "Quiz will have five questions and you will be able to see the result at the end",
	},
];
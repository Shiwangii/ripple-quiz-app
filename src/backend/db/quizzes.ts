import { QuizDataType } from "context";
import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes: Array<QuizDataType> = [
	{
		_id: "4ea20038-c0d7-11ec-9d64-0242ac120002",
		title: "Big Bang Theory",
		totalScore: 50,
		description: "Take a quiz on the seven kingdom of westeros.",
		imageURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/images/bbt.png",
		mcqs: [
			{
				_id: uuid(),
				question: "Where does Sheldon work?",
				options: ["Stanford", "Caltech", "Harvard", "Texas"],
				answer: "Caltech",
			},
			{
				_id: uuid(),
				question: "What apartment does Sheldon and Lenard live in?",
				options: ["4A", "4B", "4C", "4D"],
				answer: "4B",
			},
			{
				_id: uuid(),
				question: "Who is the actress of Penny?",
				options: [
					"Sara Gilbert",
					"Kaley Cuoco",
					"Jennifer Aniston",
					"Megan Fox",
				],
				answer: "Kaley Cuoco",
			},
			{
				_id: uuid(),
				question: "What type of scintists are Sheldon and Lenard?",
				options: ["Physicists", "Chemist", "Engineer", "Astrophysicist"],
				answer: "Physicists",
			},
			{
				_id: uuid(),
				question: "What is the name of Raj's dog ?",
				options: ["Moon pie", "Butter Cup", "Cinnamon", "Bella"],
				answer: "Cinnamon",
			},
		],
		categoryName: "TV Series",
		createdBy: "4ea212a8-c0d7-11ec-9d64-0242ac120002",
	},
	{
		_id: "4ea21104-c0d7-11ec-9d64-0242ac120003",
		title: "Game of Thrones",
		totalScore: 50,
		description: "Take a quiz on the seven kingdom of westeros.",
		imageURL:
			"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/series.png",
		mcqs: [
			{
				_id: uuid(),
				question: "Who is the youngest of Ned Stark’s children?",
				options: ["Arya", "Sansa", "Rickon", "Bran"],
				answer: "Rickon",
			},
			{
				_id: uuid(),
				question: "Which of the following is NOT one of Daenerys's dragons?",
				options: ["Viserion", "Rhegal", "Aegon", "Drogon"],
				answer: "Aegon",
			},
			{
				_id: uuid(),
				question:
					"Which of the following kingdoms is, on average, furthest south?",
				options: ["The Riverlands", "The Vale", "Drone", "The Reach"],
				answer: "Drone",
			},
			{
				_id: uuid(),
				question: "What is the sigil of house Baratheon?",
				options: ["Stag", "Unicorn", "Rose", "Moon"],
				answer: "Stag",
			},
			{
				_id: uuid(),
				question:
					"Which of these characters never served as hand to a king (or queen)?",
				options: [
					"Jorah Mormont",
					"Ned Stark",
					"Ser Davos Seaworth",
					"Tyrion Lannister",
				],
				answer: "Jorah Mormont",
			},
		],
		categoryName: "TV Series",
		createdBy: "default",
	},
	{
		_id: "4ea21104-c0d7-11ec-9d64-0242ac120004",
		title: "Football",
		totalScore: 50,
		description: "Take a quiz on Football.",
		imageURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/images/football.png",
		mcqs: [
			{
				_id: uuid(),
				question:
					"How large is a goalkeepers box where he/she can pick up the ball?",
				options: ["18 yards", "22 yards", "30 yards", "14 yards"],
				answer: "18 yards",
			},
			{
				_id: uuid(),
				question:
					"How many teams get relegated from the English Premier league each season?",
				options: ["2", "5", "3", "1"],
				answer: "3",
			},
			{
				_id: uuid(),
				question: "how long is a match of football?",
				options: [
					"80 minutes",
					"1 and a half hour",
					"60 minutes",
					"100 minutes",
				],
				answer: "1 and a half hour",
			},
			{
				_id: uuid(),
				question:
					"how much extra time is added if a cup match is a draw at 90 minutes with no option of a replay?",
				options: ["10 minutes", "20 minutes", "45 minutes", "30 minutes"],
				answer: "Stag",
			},
			{
				_id: uuid(),
				question: "how many game officials are there in a match of football?",
				options: ["2", "6", "4", "1"],
				answer: "4",
			},
		],
		categoryName: "Sports",
		createdBy: "default",
	},
	{
		_id: "4ea21104-c0d7-11ec-9d64-0242ac120005",
		title: "Physics",
		totalScore: 50,
		description: "Take a quiz on Physics.",
		imageURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/images/physics.jpg",
		mcqs: [
			{
				_id: uuid(),
				question: "The Eigen value of a particle in a box is",
				options: ["L/2", "2/L", "√2/L", "√L/2"],
				answer: "√L/2",
			},
			{
				_id: uuid(),
				question: "The walls of a particle in a box are supposed to be?",
				options: [
					"Small but infinitely hard",
					"Infinitely large but soft",
					"Soft and Small",
					"Infinitely hard and infinitely large",
				],
				answer: "Infinitely hard and infinitely large",
			},
			{
				_id: uuid(),
				question: "The wave function of the particle lies in which region?",
				options: ["x > 0", "x < 0", "0 < X < L", "x > L"],
				answer: "0 < X < L",
			},
			{
				_id: uuid(),
				question:
					"For a particle inside a box, the potential is maximum at x = ____",
				options: ["L", "2/L", "L/2", "3L"],
				answer: "L",
			},
			{
				_id: uuid(),
				question:
					"In a finite Potential well, the potential energy outside the box is _?",
				options: ["Zero", "Infinite", "Constant", "Variable"],
				answer: "Constant",
			},
		],
		categoryName: "Science",
		createdBy: "default",
	},
];
import Question from "./Question.js";
import Quiz from "./Quiz.js";

const q1 = new Question();
const q2 = new Question();
const q3 = new Question();
const q4 = new Question();
const q5 = new Question();

const qArray = [q1, q2, q3, q4, q5];

const myQuiz = new Quiz(qArray);
console.log(myQuiz);
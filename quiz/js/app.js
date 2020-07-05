import Question from "./Question.js"

let q1 = new Question("What is 1+1?", [3,2,5,7], 1);
console.log(q1);

console.log(q1.isCorrect(1));
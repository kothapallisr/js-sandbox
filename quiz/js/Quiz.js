
export default function Quiz(questions) {
  this.questions = questions;
  this.score = score;
  this.currentIndex = currentIndex;
}

Quiz.prototype.getCurrentQuestion() = function() {
  return this.questions[this.currentIndex];
}


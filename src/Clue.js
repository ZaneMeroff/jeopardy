class Clue {
  constructor(question, answer, id, pointValue, dailyDouble = false) {
    this.question = question;
    this.answer = answer;
    this.id = id;
    this.pointValue = pointValue;
    this.dailyDouble = dailyDouble;
  }

  checkAnswer(playerAnswer) {
    if (playerAnswer === this.answer) {
      return true;
    } else {
      return false;
    }
  }
}

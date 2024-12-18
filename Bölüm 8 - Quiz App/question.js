function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
    this.checkAnswer = function (answer) {
      return answer === this.correctAnswer;
    };
    // console.log(this)
  }
  
  Question.prototype.checkAnswer2 = function (answer) {
    return answer === this.correctAnswer;
  };
  
  let questions = [
    new Question(
      "1) Which one is a .net package management application?",
      {
        a: "Node.js",
        b: "Nuget",
        c: "Npm",
        d: "Nuget",
      },
      "b"
    ),
    new Question(
      "2) Which one is a .net package management application?",
      {
        a: "Node.js",
        b: "Nuget",
        c: "Npm",
      },
      "a"
    ),
    new Question(
      "3) Which one is a .net package management application?",
      {
        a: "Node.js",
        b: "Nuget",
        c: "Npm",
      },
      "c"
    ),
  ];
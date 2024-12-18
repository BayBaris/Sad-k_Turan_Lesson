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
      "2) Which method reverses an array?",
      {
        a: "reverse",
        b: "sort",
        c: "shift",
        d: "map",
      },
      "a"
    ),
    
    new Question(
      "3) What does the 'this' keyword represent?",
      {
        a: "Global Context",
        b: "Function Context",
        c: "Current Object",
        d: "Parent Object",
      },
      "c"
    ),
    
    new Question(
      "4) Which one is a JavaScript loop type?",
      {
        a: "forEach",
        b: "callback",
        c: "filter",
        d: "find",
      },
      "a"
    ),
    
    new Question(
      "5) What is the difference between `let` and `var`?",
      {
        a: "Block Scope",
        b: "Global Scope",
        c: "Function Scope",
        d: "Local Scope",
      },
      "a"
    )
  ];
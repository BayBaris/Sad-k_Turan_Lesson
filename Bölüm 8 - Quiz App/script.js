function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
    this.checkAnswer = function (answer) {
        return answer === this.correctAnswer
    }

    console.log(this)
}

Question.prototype.checkAnswer2 = function (answer) {
    return answer === this.correctAnswer
}

let que1 = new Question(
    "Which one is a javascript package management application?",
    {
        a: "Node.js",
        b: "Typescript",
        c: "Npm",
    },
    "c"
);

let que2 = new Question(
    "Which one is a .net package management application?",
    {
        a: "Node.js",
        b: "Nuget",
        c: "Npm",
    },
    "b"
);

let questions = [
    new Question(
        "Which one is a .net package management application?",
        {
            a: "Node.js",
            b: "Nuget",
            c: "Npm",
        },
        "b"
    ),
    new Question(
        "Which one is a .net package management application?",
        {
            a: "Node.js",
            b: "Nuget",
            c: "Npm",
        },
        "a"
    ),
    new Question(
        "Which one is a .net package management application?",
        {
            a: "Node.js",
            b: "Nuget",
            c: "Npm",
        },
        "c"
    ),
];
// console.log(que1.correctAnswer);

// for (let que of questions) {
//     console.log(que.correctAnswer);
// }

// console.log(questions[0].checkAnswer("c"));
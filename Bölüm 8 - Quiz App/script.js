function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
    this.checkAnswer = function (answer) {
        return answer === this.correctAnswer
    }
    // console.log(this)
}

Question.prototype.checkAnswer2 = function (answer) {
    return answer === this.correctAnswer
}

let questions = [
    new Question(
        "1) Which one is a .net package management application?",
        {
            a: "Node.js",
            b: "Nuget",
            c: "Npm",
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

function Quiz(questions){
    this.questions = questions;
    this.questionIndex = 0;
}


Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);
const quizBox = document.querySelector(".quiz-box");

document.querySelector(".btn-start").addEventListener("click",function(){
    if(quiz.questions.length != quiz.questionIndex){
        console.log(quiz.getQuestion());
        quizBox.classList.add("active");

        quiz.questionIndex += 1;
    }
    else{
        console.log("Quiz Bitti")
    }
});

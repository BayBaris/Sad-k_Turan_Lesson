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

function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

const quiz = new Quiz(questions);

const quizBox = document.querySelector(".quiz-box");
const optionList = document.querySelector(".option-list");
const nextBtn = document.querySelector(".next-btn");

const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const wrongIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

document.querySelector(".btn-start").addEventListener("click", function () {
  quizBox.classList.add("active");
  showQuestion(quiz.getQuestion());
  showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
  nextBtn.classList.remove("show");
});

document.querySelector(".next-btn").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    showQuestion(quiz.getQuestion());
    showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);

    nextBtn.classList.remove("show");
  } else {
    console.log("Quiz Bitti");
  }
});

function showQuestion(que) {
  let question = `<span>${que.questionText}</span>`;
  let option = ``;

  for (let answer in que.answerOptions) {
    option += `
            <div class="option"> 
                <span><b>${answer}</b>: ${que.answerOptions[answer]}</span>
                </div>
        `;
  }

  document.querySelector(".question-text").innerHTML = question;
  optionList.innerHTML = option;

  const options = optionList.querySelectorAll(".option");

  for (let option of options) {
    option.setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  let answer = option.querySelector("span b").textContent;
  let que = quiz.getQuestion();

  if (que.checkAnswer2(answer)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", wrongIcon);
  }

  for (let i = 0; i < optionList.children.length; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("show");
}

function showQuestionNumber(queQueue, totalQue) {
  let tag = `<span class="badge bg-warning">${queQueue} / ${totalQue}</span>`;
  document.querySelector(".quiz-box .question-index").innerHTML = tag;
}

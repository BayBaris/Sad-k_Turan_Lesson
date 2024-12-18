//Nesnelerimizi tanımlıyoruz...
const quiz = new Quiz(questions);
const ui = new UI();

const quizBox = document.querySelector(".quiz-box");
const optionList = document.querySelector(".option-list");
const nextBtn = document.querySelector(".next-btn");

const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const wrongIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

ui.btnStart.addEventListener("click", function () {
  quizBox.classList.add("active");
  ui.showQuestion(quiz.getQuestion());
  ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
  nextBtn.classList.remove("show");
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);

    ui.btnNext.classList.remove("show");
  } else {
    console.log("Quiz Bitti");
  }
});

function optionSelected(option) {
  let answer = option.querySelector("span b").textContent;
  let que = quiz.getQuestion();

  if (que.checkAnswer2(answer)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.wrongIcon);
  }

  for (let i = 0; i < ui.optionList.children.length; i++) {
    ui.optionList.children[i].classList.add("disabled");
  }

  ui.btnNext.classList.add("show");
}


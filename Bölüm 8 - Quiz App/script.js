//Nesnelerimizi tanımlıyoruz...
const quiz = new Quiz(questions);
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
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
    ui.quizBox.classList.remove("active");
    ui.scoreBox.classList.add("active");
    ui.showScore(quiz.correctAnswerCount,quiz.questions.length);
  }
});

ui.btnQuit.addEventListener("click", function(){
    window.location.reload();
})

ui.btnReplay.addEventListener("click", function(){
    quiz.questionIndex = 0;
    quiz.correctAnswerCount = 0;
    ui.btnStart.click();
    ui.scoreBox.classList.remove("active");
})


function optionSelected(option) {
  let answer = option.querySelector("span b").textContent;
  let que = quiz.getQuestion();

  if (que.checkAnswer2(answer)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    quiz.correctAnswerCount++;
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.wrongIcon);
  }

  for (let i = 0; i < ui.optionList.children.length; i++) {
    ui.optionList.children[i].classList.add("disabled");
  }

  ui.btnNext.classList.add("show");
}


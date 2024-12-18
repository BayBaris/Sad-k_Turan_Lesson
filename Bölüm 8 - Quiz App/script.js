//Nesnelerimizi tanımlıyoruz...
const quiz = new Quiz(questions);
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  startTimer(10);
  ui.showQuestion(quiz.getQuestion());
  ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
  ui.btnNext.classList.remove("show");
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    clearInterval(counter);
    startTimer(10);
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);

    ui.btnNext.classList.remove("show");
  } else {
    clearInterval(counter);
    ui.quizBox.classList.remove("active");
    ui.scoreBox.classList.add("active");
    ui.showScore(quiz.correctAnswerCount, quiz.questions.length);
  }
});

ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

ui.btnReplay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctAnswerCount = 0;
  ui.btnStart.click();
  ui.scoreBox.classList.remove("active");
  clearInterval(counter);
  startTimer(10);
});

function optionSelected(option) {
  clearInterval(counter);
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

let counter;
function startTimer(second) {
  //timer fonksiyonun (1 saniye) de bir çağırıyoruz.
  counter = setInterval(timer, 1000);

  function timer() {
    ui.timeSecond.textContent = second;
    second--;

    if (second < 0) {
      //setInterval'ın bellekteki adresini vermiş oluyoruz.
      clearInterval(counter);
      ui.timeText.textContent = "Timeout";

      let answer = quiz.getQuestion().correctAnswer;

      for (let option of ui.optionList.children) {
        if (option.querySelector("span b").textContent == answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }

      ui.btnNext.classList.add("show");
    }
  }
}

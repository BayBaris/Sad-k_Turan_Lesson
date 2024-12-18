function UI(){
    this.btnStart = document.querySelector(".btn-start"),
    this.btnNext = document.querySelector(".next-btn"),
    this.btnReplay = document.querySelector(".btn-replay"),
    this.btnQuit = document.querySelector(".btn-quit"),
    this.quizBox = document.querySelector(".quiz-box"),
    this.scoreBox = document.querySelector(".score-box"),
    this.optionList = document.querySelector(".option-list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.wrongIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.showQuestion = function(que){
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
    this.optionList.innerHTML = option;
  
    const options = this.optionList.querySelectorAll(".option");
  
    for (let option of options) {
      option.setAttribute("onclick", "optionSelected(this)");
    }
  }

UI.prototype.showQuestionNumber = function (queQueue, totalQue) {
    let tag = `<span class="badge bg-warning">${queQueue} / ${totalQue}</span>`;
    document.querySelector(".quiz-box .question-index").innerHTML = tag;
  }

UI.prototype.showScore = function(correctAnswer, totalQue){
    let tag = `${correctAnswer} of ${totalQue} Correct Answers`;
    document.querySelector(".score-box .score-text").innerHTML = tag;

}
  
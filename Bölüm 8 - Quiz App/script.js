// OOP

let question1 = {
    text: "Which one is a javascript package management application?",
    options : {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    },
    correctAnswer: "c",
    checkAnswer: function(answer){
        return answer === this.correctAnswer;
    }
};

let question2 = {
    text: "Which one is a .net package management application?",
    options : {
        a: "Node.js",
        b: "Nuget",
        c: "Npm"
    },
    correctAnswer: "b",
    checkAnswer: function(answer){
        return answer === this.correctAnswer;
    }
};

console.log(question1.checkAnswer("a"));
console.log(question2.options);

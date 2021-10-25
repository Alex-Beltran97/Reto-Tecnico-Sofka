import {questions} from "./data/questions.js";
import {Quiz} from "./models/Quiz.js";
import {UI} from "./models/UI.js"

const renderPage = (quiz,ui) => {
    if (quiz.final()){
        ui.showScores(quiz.score);
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice)=>{
        quiz.guess(currentChoice);
        renderPage(quiz,ui);
    });
    ui.showProgress(quiz.questionIndex+1,quiz.questions.length);
    }

}

function main(){
    const quiz = new Quiz(questions);
    const ui = new UI();
    const newElement = document.querySelector(".quiz");
    const botonRendirse = document.createElement("button");
    const textBoton = document.createTextNode("Rendirse");
    botonRendirse.appendChild(textBoton);
    newElement.appendChild(botonRendirse);
    botonRendirse.className = "rendirse";

    renderPage(quiz,ui);
}

main();


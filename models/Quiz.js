export class Quiz{

    questionIndex = 1;
    score = 0;

    constructor(questions){
        this.questions = questions;
    }
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }
    isEnded(){
        return this.question.length === this.questionIndex
    }

    guess(answer){
        alert(answer);
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }

        this.questionIndex++
    }
}
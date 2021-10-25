export class Quiz{

    questionIndex = 0;
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

        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }

        this.questionIndex++
    }
}
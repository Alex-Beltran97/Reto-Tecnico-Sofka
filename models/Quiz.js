export class Quiz{

    questionIndex = 0;
    score = 0;

    constructor(questions){
        this.questions = questions;
    }
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }
    final(){
        if(this.questionIndex > 2){
            return true;
        } 
    }
    
    guess(answer){
        console.log(answer);
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        
        this.questionIndex++
    }
}

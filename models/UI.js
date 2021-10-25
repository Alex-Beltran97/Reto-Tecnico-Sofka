export class UI {
    constructor(){}

    showQuestion(text){
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }
    showChoices(choices){
        const choicesContainer = document.getElementById("choices");
        for (let i = 0; i < choices.length; i++){
            const button = document.createElement("button");
            button.innerHTML = choices[i];
            choicesContainer.appendChild(button)
            button.className = "button";

            
        }
        

        // console.log(choicesContainer);
    }
}



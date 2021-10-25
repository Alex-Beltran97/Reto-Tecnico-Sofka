// class Quiz {
//     constructor(text,choice,answer){
//         this.text = text;
//         this.choice = choice;
//         this.answer = answer;
        
//     }
//     respuestaCorrecta(){
//         let answer = prompt(`${this.text}`);
//         if (answer == 2 ){
//             console.log("correcto!")
//         }else{
//             console.log("fallaste");
//         }
//     }
// }


// const data = [

//     {
//         pregunta: "cuanto es 1+1",
//         opciones: [10,2],
//         respuesta: 2,
//     }    
// ]

// let respuesta = data.map(pregunta=>new Quiz(pregunta.pregunta,pregunta.opciones,pregunta.respuesta));

// respuesta[0].respuestaCorrecta();


// let array = [3,4];

// console.log(array.length);

const contenedor = document.querySelector(".contenedor");

const item = document.createElement("button");

const textoItem = document.createTextNode("Holo");

item.appendChild(textoItem);

contenedor.appendChild(item)

console.log(item)



// let respuesta = function (animal){
//     new Animal(animal.especie,animal.edad,animal.color);
// };


// const perro = new Animal("perro","5","marron");


// console.log(respuesta());

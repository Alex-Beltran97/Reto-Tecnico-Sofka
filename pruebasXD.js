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

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("button");

// const textoItem = document.createTextNode("Holo");

// item.appendChild(textoItem);

// contenedor.appendChild(item)

// console.log(item)



// let respuesta = function (animal){
//     new Animal(animal.especie,animal.edad,animal.color);
// };


// const perro = new Animal("perro","5","marron");


// console.log(respuesta());


// const btnAumentar = document.querySelector(".btn-info");
// const btnDisminuir = document.querySelector(".btn-danger");

// const span = document.getElementById("span")

// span.innerHTML = localStorage.getItem("puntaje");

// btnAumentar.addEventListener("click", ()=>{
//     console.log("me diste click,aumentar")
//     span.textContent++;
//     localStorage.setItem("Puntaje",span.textContent)
// })
// btnDisminuir.addEventListener("click", ()=>{
//     console.log("me diste click,aumentar")
//     span.textContent--;
//     localStorage.setItem("Puntaje",span.textContent)
// })

// console.log(span.textContent)


let array = [1,2,3];

array.length

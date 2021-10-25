const contenedor = document.querySelector(".puntaje");
const item = document.createElement("h1");
const textoItem = document.createTextNode("Gracias por participar.");
item.appendChild(textoItem);
contenedor.appendChild(item);

item.className = "gracias";


const contenedor1 = document.querySelector(".estadistica");
const item1 = document.createElement("h2");
const textoItem1 = document.createTextNode(`Úlitmo puntaje registrado: ${localStorage.getItem("score")}`);
item1.appendChild(textoItem1);
contenedor1.appendChild(item1);

item1.className = "puntos";


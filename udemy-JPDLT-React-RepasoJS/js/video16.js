// 16. Objetos en JS - Object Constructor

//-> Object Literal
const persona = {
    nombre: "Juan",
    profesion: "Desarrollador web",
    edad: 50
};

console.log(persona);

//-> Object Constructor
// Pero ya este a ido quedando un poco atras porque ya JS soporta clases.
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// crear una nueva tarea
const tarea1 = new Tarea("Aprender JS", "Urgente");

console.log(tarea1);
console.log(tarea1.nombre);
console.log(tarea1.urgencia);

/**
 * La ventaja del Object Constructor sobre el Object Literal, es que te
 * permite crear multiples objetos.
 */

const tarea2 = new Tarea("Aprender CSS", "Media");
const tarea3 = new Tarea("Aprender HTML", "Basic");
const tarea4 = new Tarea("Aprender GO", "Alto");

console.log(tarea2);
console.log(tarea3);
console.log(tarea4);

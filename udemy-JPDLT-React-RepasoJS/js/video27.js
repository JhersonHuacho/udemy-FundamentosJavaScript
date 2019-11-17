// 27. Programación Orientada a Objetos - Clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

// crear los objetos
let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Aprender Java", "Media");
let tarea3 = new Tarea("Aprender Visual Basic", "Baja");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());

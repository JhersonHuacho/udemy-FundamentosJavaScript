//export const nombreTarea = "Pasear al Perro"; // forma 01 para que requiera llave en el import

const nombreTarea = "Pasear al Perro"; // forma 02 para que NO requiera llave en el import y la variable debe llamarse igual
export default nombreTarea; // forma 02 para que NO requiera llave en el import

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad); // con super() hacemos referencia al constructor padre
        this.cantidad = cantidad;
    }
    hola() {
        return "Hola";
    }
}

// crear los objetos
let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Aprender Java", "Media");
let tarea3 = new Tarea("Aprender Visual Basic", "Baja");

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());

// Compras
let compra1 = new ComprasPendientes("Jabon", "Urgente", 3);
// console.log(compra1);
// console.log(compra1.mostrar());

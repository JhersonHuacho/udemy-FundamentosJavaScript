/**
 * Polimorfismo en JS.
 * No es mas que una función que puede recibir diferentes tipos de parametros 
 * o diferentes tipos de datos.
 */

function determinaDato(a) {
    if (a === undefined) {
        console.log("A es undefined... no se que hacer");
    }
    if (typeof a === "number") {
        console.log("A es un numero");
    }
    if (typeof a === "string") {
        console.log("A es un texto");
    }
    if (typeof a === "object") {
        console.log("A es un objeto... pero puede ser cualquier cosa");

        if (a instanceof Number) {
            console.log("A es un objeto numerico...");
        }
    }
}
var b = new Number(3);
console.log(b);

determinaDato();

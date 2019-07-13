/**
 * En JS un objeto de tipo String es un objeto
 */

var a = new String("Fernando Herrera");

console.log(a[0]);
console.log(a["0"]);
console.log(a);

var b = "Herrera";
console.log(b.toUpperCase());

var i = a.indexOf("n");
console.log("la letra esta : ", i);

i = a.lastIndexOf("n");
console.log("la letra esta : ", i);

var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);

var split = a.split();

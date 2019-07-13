// Set y Map
// Es como un arreglo solo que aquí no se pueden repetir los datos, 
// en caso de que sean repetidos no se agregan a este arreglo 

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('nombre', 'juan');
datos.set('profesion','desarrollador web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

// Entries iterador
for (let entrada of ciudades.entries() ) {
    console.log(entrada);
}

for (let entradas of ordenes.entries()){
    console.log(entradas);
}

for (let entrada of datos.entries()){
    console.log(entrada);
}

// Values iterador
for (let entrada of ciudades ) {
    console.log(entrada);
}
for (let entradas of ordenes.values()){
    console.log(entradas);
}
for (let entrada of datos.values()){
    console.log(entrada);
}

// Keys iterador
for (let entrada of ciudades.keys() ) {
    console.log(entrada);
}
for (let entradas of ordenes.keys()){
    console.log(entradas);
}
for (let entrada of datos.keys()){
    console.log(entrada);
}
// default iterador
for (let entrada of ciudades ) {
    console.log(entrada);
}
for (let entradas of ordenes){
    console.log(entradas);
}
for (let entrada of datos){
    console.log(entrada);
}

const mensaje = 'Aprendiendo JavaScript';

// forma vieja de iterar un string
for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);    
}
// forma nueva de iterar un string
for (let letra of mensaje) {
    console.log(letra);
}
//
const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlace);
}
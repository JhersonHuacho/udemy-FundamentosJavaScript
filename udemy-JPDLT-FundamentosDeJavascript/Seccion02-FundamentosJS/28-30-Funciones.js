// Function Declaration

function saludar(nombre) {
    console.log(`hola ${nombre}`);
}

saludar('Alma');

function sumar(a, b) {
    return a + b ;
}
let suma;
suma = sumar(2, 4);

console.log(suma);

// forma vieja
function saludarFormaVieja(nombre) {
    if (typeof nombre === 'undefined') {nombre = 'Visitante'}
    return `hola ${nombre}`;
}

let saludo;
saludo = saludarFormaVieja('Carolina');
console.log(saludo);
saludo = saludarFormaVieja();
console.log(saludo);

// forma nueva
function saludarFormaNueva(nombre = 'Visitante') {    
    return `hola ${nombre}`;
}
saludo = saludarFormaNueva();

// Function Expression
const sumaDos = function(a = 0, b = 0) {
    return a + b;
}

console.log( sumaDos(a,b) );
console.log( sumaDos() );


// IIFE = funciones que se declaran y se invocan inmediatamente

(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);    
})('JavaScript');

// Metodos de propiedad
// cuando una función se ponde dentro de un objeto
const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo Música ID ${id}`);
    },
    pausar: function() {
        console.log('Pause la música');
    }
}
// los métodos también pueden guardarse / crearse fuera del objeto
musica.borrar = function(id) {
    console.log(`Borrando la canción con el ID: ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
























let aprendiendo = "Aprendiendo",
    tecnologia = "JavaScript";

console.log(aprendiendo.length);
console.log(tecnologia.concat(' ', 'Es genial'));// no se usa
console.log(aprendiendo.toUpperCase());
console.log(aprendiendo.toLowerCase());

let mensaje = "Aprendiendo JavaScript, CSS, HTML para ser Frontend";

console.log(mensaje.indexOf('PHP'));
console.log(mensaje.substring(0,11));
console.log(mensaje.slice(-3));
console.log(mensaje.slice(0,11));
console.log(mensaje.split(' '));
console.log(mensaje.replace('CSS','PHP'));
console.log(mensaje.includes('CSS'));

console.log(tecnologia.repeat(10));
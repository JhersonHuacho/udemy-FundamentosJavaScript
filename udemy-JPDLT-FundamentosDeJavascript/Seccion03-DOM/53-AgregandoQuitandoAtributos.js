/**
 * 53. Agregando y quitando atributos en JS
 */

const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelectorAll('#principal');
enlaces[0].remove();
//navegacion.removeChild(enlaces[0]);
console.log(enlaces);

const primerLi = document.querySelector('.enlace');
let elemento;
elemento = primerLi.className;
console.log(elemento);
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
console.log(elemento);
elemento = primerLi.classList;
console.log(elemento);

// leer atributos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://google.com');
elemento = primerLi;
console.log(elemento);

primerLi.setAttribute('data-id',20);
elemento = primerLi;
console.log(elemento);
elemento = primerLi.hasAttribute('data-id');
console.log(elemento);
primerLi.removeAttribute('data-id');
elemento = primerLi;
console.log(elemento);
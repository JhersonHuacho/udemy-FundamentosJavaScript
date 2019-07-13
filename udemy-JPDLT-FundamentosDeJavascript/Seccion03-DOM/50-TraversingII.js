/**
 * 50. Traversing en JS (Del hijo hacia el padre)
 */

const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces);
console.log(enlaces[0].parentNode);
// se recomienda usar parentElement este en vez de parentNode
console.log(enlaces[0].parentElement);
console.log(enlaces[0].parentElement.parentElement);

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].parentElement.parentElement.parentElement
    .children[0].textContent = "Hola desde traversing");

const enlacesDos = document.querySelectorAll('.enlace');
console.log(enlaces[4].previousSibling); // me retorna #text
console.log(enlaces[4].previousElementSibling); // me retorna el elemento
console.log(enlaces[4].previousElementSibling.previousElementSibling);
console.log(enlaces[0].nextElementSibling.nextElementSibling);
console.log(enlaces[0].nextElementSibling.nextElementSibling
    .parentElement.children[4]);
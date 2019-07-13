/**
 * 49. Traversing en JS (Del padre hacia al hijo)
 */

const navegacion = document.querySelector('#principal');
console.log(navegacion.childNodes);
console.log(navegacion.children);
console.log(navegacion.children[0]);
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);

/* nodeType
    1 = los del tipo 1 son los Elementos
    2 = los del tipo 2 son los Atributos
    3 = los del tipo 3 son los Text Node
    8 = los del tipo 8 son los Comentarios
    9 = los del tipo 9 son los documentos
    10 = los del tipo 10 son el doctype
 */

console.log(navegacion.children);
console.log(navegacion.children[0].textContent = "Nuevo Enlace");

const barra = document.querySelector('.barra');
console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');
console.log(cursos);
console.log(cursos[0].lastChild); // retorna #text
// #text son usualmente los espacios en blancos
console.log(cursos[0].lastElementChild); // retorna el elemento
console.log(cursos[0].firstElementChild); // retorna el elemento
console.log(cursos[0].childElementCount);
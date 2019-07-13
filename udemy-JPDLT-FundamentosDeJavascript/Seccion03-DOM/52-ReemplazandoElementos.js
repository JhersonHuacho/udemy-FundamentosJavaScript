/**
 * 52. Reemplazando elementos con JS
 */

const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = "encabezado";
nuevoEncabezado.appendChild(document.createTextNode("Los mejores cursos"));
console.log(nuevoEncabezado);

const anterior = document.querySelector("#encabezado");
const elPadre = document.querySelector('#lista-cursos');
elPadre.replaceChild(nuevoEncabezado, anterior);
console.log(anterior);
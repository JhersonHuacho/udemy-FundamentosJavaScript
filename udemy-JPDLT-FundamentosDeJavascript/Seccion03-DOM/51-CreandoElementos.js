/**
 * 51. Creando elementos con JS
 */

const enlace = document.createElement('a');
enlace.className = 'enlace';
enlace.id = "nuevo-id";
enlace.setAttribute('href','#');
enlace.textContent = "Nuevo Enlace";
//enlace.appendChild(document.createTextNode("Nuevo Enlace"));
console.log(enlace);

document.querySelector('#secundaria').appendChild(enlace);
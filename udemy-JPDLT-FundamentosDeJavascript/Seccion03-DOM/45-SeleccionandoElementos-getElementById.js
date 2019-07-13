/**
 * 45. Seleccionando elementos y aplicandole propiedades
 */

let elemento;
elemento = document.getElementById('hero');
elemento = document.getElementById('hero').id;
console.log(elemento);

let encabezado;
encabezado = document.getElementById('encabezado').textContent;
console.log(encabezado);
encabezado = document.getElementById('encabezado').innerText;
console.log(encabezado);
encabezado = document.getElementById('encabezado');
encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.textContent = "Los mejores cursos";
encabezado.innerText = "Los mejores cursos";
console.log(encabezado);
/**
 * 46. Seleccionando elementos con querySelector
 */


const encabezado = document.querySelector('#encabezado');
encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.textContent = "Los mejores cursos";
console.log(encabezado);

// diferencia de querySelector() con getElementById()
// getElementById() solo selecciona ID
// querySelector() selecciona por clases, ID, etiqueta
// estos 2 metodos (querySelector y getElementById) retornan un solo valor

const elemento = document.querySelector('.card img');
console.log(elemento);

let enlace 
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:last-child');
console.log(enlace);


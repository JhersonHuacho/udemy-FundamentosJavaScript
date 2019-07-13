/**
 * 47. Seleccionando multiples elementos
 */

let enlaces = document.getElementsByClassName('enlace'); // retorna HTMLCollection
enlaces = enlaces[2];
console.log(enlaces);
enlaces = document.getElementsByClassName('enlace')[2]; // retorna HTMLCollection
enlaces.style.background = "#333";
console.log(enlaces);

const listasEnlaces = document.querySelector('#principal')
    .getElementsByClassName('enlace');
console.log(listasEnlaces);

const links = document.getElementsByTagName('a');
links[18].style.color = 'red';
console.log(links);
let enlacesLinks = Array.from(links);
enlacesLinks.forEach(function(enlace){
    console.log(enlace.textContent);
});
console.log(enlacesLinks);


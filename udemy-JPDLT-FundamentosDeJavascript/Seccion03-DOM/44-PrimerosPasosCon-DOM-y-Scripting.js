/**
 * 44. Primeros pasos con DOM y Scripting
 */

let elemento;
elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms; // retorna un HtmlCollection
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList; // retorna un DOMTokenList
elemento = document.forms[0].classList[0];
elemento = document.images; // retorna un HtmlCollection
elemento = document.images[0];
elemento = document.images[0].src;
elemento = document.images[0].getAttribute('src');
// Scripts
elemento = document.scripts;
// document.images; nos retorna un HtmlCollection, 
// no es un arreglo aunque podemos acceder
// a ellos como si fuera un arreglo, pero al final es un HtmlCollection
elemento = document.images;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
imagenesArr.forEach(function(imagen){
    console.log(imagen);
});
console.log(imagenesArr);
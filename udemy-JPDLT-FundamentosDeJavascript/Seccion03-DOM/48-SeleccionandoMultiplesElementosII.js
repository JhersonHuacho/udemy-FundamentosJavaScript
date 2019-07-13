/**
 * 48. Seleccionando multiples elementos II
 */

const enlaces = document.querySelectorAll('#principal .enlace'); // retorna un NodeList
enlaces[1].style.background = 'red';

console.log(enlaces); 

const enlacesDos = document.querySelectorAll('#principal a:nth-child(odd)');

enlacesDos.forEach(function(impares){
    impares.style.background = 'blue';
})
console.log(enlacesDos);
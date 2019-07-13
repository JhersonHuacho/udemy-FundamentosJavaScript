/** 
 * Event Bubbling (burbuja de eventos)
 * cuando selecciono un elemento y otros elemetos se ven seleccionados
*/

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

// card.addEventListener('click', function(){
//     console.log('Click en Card');
// });

// infoCurso.addEventListener('click', function(){
//     console.log('Click en Info Curso');
// });

// agregarCarrito.addEventListener('click', function(){
//     console.log('Click en Agregar Carrito');
// });

// Hay varias formas de prevenir el Event Bubbling

card.addEventListener('click', function(e){
    console.log('Click en Card');
    e.stopPropagation();
});

infoCurso.addEventListener('click', function(e){
    console.log('Click en Info Curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click', function(e){
    console.log('Click en Agregar Carrito');
    e.stopPropagation();
});

// hay otra forma de prevenir esto, es con DELEGATION
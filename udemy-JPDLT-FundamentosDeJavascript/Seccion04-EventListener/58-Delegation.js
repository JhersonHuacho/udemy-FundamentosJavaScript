/**
 * hay otra forma de prevenir el Event Bubbling, 
 * es con DELEGATION.
 * No lo va solucionar pero es una buena alternativa. 
 * */ 


document.body
    .addEventListener('click', eliminarElemento);

function eliminarElemento(e){    
    e.preventDefault();    
    if (e.target.classList.contains('borrar-curso')) {
        console.log('SI!');
        console.log(e.target);
        console.log(e.target.parentElement.parentElement.remove());
    } else {
        console.log('NO!');                
    }

    if (e.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado');
    }
}
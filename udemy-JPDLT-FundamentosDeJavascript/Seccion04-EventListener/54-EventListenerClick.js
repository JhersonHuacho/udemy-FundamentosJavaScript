// Event Listener Click al buscador
document.querySelector('#submit-buscador')
    .addEventListener('click', ejecutarBoton);

function ejecutarBoton(event) {
    event.preventDefault(); // -> estamos preveniendo la acción por default. Que no se ejecute el action que esta en el formulario
    //alert('Buscando cursos desde la función');

    let elemento;
    elemento = event;
    elemento = event.target;
    elemento = event.target.id;
    elemento = event.target.className;    
    console.log(elemento);
}    

document.querySelector('#encabezado')
    .addEventListener('click', function(e){
        console.log(e.target.innerText);
        e.target.innerText = "Nuevo Encabezado";
    });
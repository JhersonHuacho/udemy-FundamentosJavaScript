
obtenerCliente();

try {
    algo();
} catch (error) {
    console.log(error);
} finally {
    console.log('No importa, ejecuta de todos modos');
}

obtenerCliente();

function obtenerCliente() {
    console.log('Descargando...');

    setTimeout(function(){
        console.log('Completo');
    }, 3000);
}
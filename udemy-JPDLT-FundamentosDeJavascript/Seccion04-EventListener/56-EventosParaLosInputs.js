
const busqueda = document.querySelector('#buscador');

//busqueda.addEventListener('keydown', obtenerEvento);
//busqueda.addEventListener('keyup', obtenerEvento);
//busqueda.addEventListener('keypress', obtenerEvento);
//busqueda.addEventListener('focus', obtenerEvento);
//busqueda.addEventListener('blur', obtenerEvento);
//busqueda.addEventListener('cut', obtenerEvento); // cortar
//busqueda.addEventListener('copy', obtenerEvento); // copiar
//busqueda.addEventListener('paste', obtenerEvento); // pegar
//busqueda.addEventListener('input', obtenerEvento); // todo en uno
busqueda.addEventListener('change', obtenerEvento); // para un combo

function obtenerEvento(e) {
    document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`EVENTO ${e.type}`);
}
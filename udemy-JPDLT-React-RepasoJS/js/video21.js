// 21. Arreglos, map y Object.keys

/**
 * 
 */

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

console.log(carrito);

const appContenedor = document.querySelector('#app');
//appContenedor.innerHTML = carrito;

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
});

appContenedor.innerHTML = html;

let carritoMap = ['Producto 1', 'Producto 2', 'Producto 3'];
carritoMap.map(producto => {
    return 'El producto es ' + producto;
});

// Object.keys
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}

console.log(persona);

const {nombre} = persona;
console.log(nombre);
console.log(Object.keys(persona));

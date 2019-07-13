// recorrer un arreglo con foreach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JavaScript'];
// for
for(let i = 0; i < pendientes.length; i++) {
    console.log(pendientes[i]);
}
// foreach
pendientes.forEach(function(pendiente, index) {
    console.log(`${index} : ${pendiente}`);
});

console.log(pendientes);

// Map para recorrer un arreglo de objetos
const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Guitarra' },
    { id: 4, producto: 'Disco' }
];

const nombreProducto = carrito.map(function() {
    return carrito.producto;
});

console.log(nombreProducto);
//
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrolet'
}

for (let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}
/**
 * 
 */

 /* la sobre carga de métodos en JS no funciona asi.
function crearProducto() {

}
function crearProducto(nombre) {
    
}
function crearProducto(nombre, precio) {
    
}
*/
function crearProducto(nombre, precio) {
    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("Producto : ", nombre, "Precio : ", precio);
}
function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}
function crearProductoCamisa(precio) {
    crearProducto("Camisa", precio);
}

crearProducto();
crearProducto("Lapiz");
crearProducto100("Corrector");
crearProductoCamisa(75);











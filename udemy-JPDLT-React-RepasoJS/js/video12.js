// 12. Funciones y los distintos tipos de funciones

// -> Function Declaration
saludar("juan"); //-> no hay error
function saludar(nombre) {
    console.log("Bienvenido " + nombre);
}
saludar("roberto");
saludar();

// -> Function expression
//cliente("Juan"); //-> error si le invoco antes
const cliente = function(nombreCliente) {
    console.log("Mostrando datos de cliente: " + nombreCliente);
};

cliente("Juan");

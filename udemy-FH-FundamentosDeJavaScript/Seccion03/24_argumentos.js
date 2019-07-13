/** ARGUMENTOS DE FUNCIONES
 * los prototipos son propiedades y metodos que son heredadas por ser de un tipo de dato
 */
var arguments = 10;

function miFuncion(a,b,c,d){
    //console.log(arguments);
    if (arguments.length !== 4 ) {
        console.error("la función necesita 4 parametros");
        return;
    }
    console.log(a + b + c + d);  
}

miFuncion(10,20,30);
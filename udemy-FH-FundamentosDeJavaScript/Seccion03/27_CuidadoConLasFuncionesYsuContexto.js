function crearFunciones(){
    var arr = [];
    var numero = 1;

    arr.push(function(){
        console.log(numero);
    });

    numero = 2;

    arr.push(function(){
        console.log(numero);
    });

    numero = 3;

    arr.push(function(){
        console.log(numero);
    });

    return arr;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();

console.log("SEGUNDA FORMA \n");

function crearFuncionesDos(){
    var arr = [];
    var numero = 1;

    arr.push(
        (function(numero) {
            return function() {
                console.log(numero);
            }
        })(numero)
    );

    numero = 2;

    arr.push(
        (function(numero) {
            return function() {
                console.log(numero);
            }
        })(numero)
    );

    numero = 3;

    arr.push(
        (function(numero) {
            return function() {
                console.log(numero);
            }
        })(numero)
    );

    return arr;
}

var funcionesDos = crearFuncionesDos();
funcionesDos[0]();
funcionesDos[1]();
funcionesDos[2]();

console.log("TERCERA FORMA \n");

function crearFuncionesTres(){
    var arr = [];
    var numero = 1;

    for( var numero = 1; numero <= 3; numero++) {
        arr.push(
            (function(numero) {
                return function() {
                    console.log(numero);
                }
            })(numero)
        );
    }
    
    return arr;
}

var funcionesTres = crearFuncionesTres();
funcionesTres[0]();
funcionesTres[1]();
funcionesTres[2]();

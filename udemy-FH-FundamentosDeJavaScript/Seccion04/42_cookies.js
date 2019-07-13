/**
 * QUE SON LAS COOKIES?
 * Es la información que podemos salvar en la maquina del cliente, como para saber que idioma selecciono, 
 * o el email de la persona, nombre de usuario, cosas generales que no sean sensibles para el funcionamiento
 * de su página.
 */

document.cookie = "nombre=fernano";
document.cookie = "apellido=herrera";

var cookies = document.cookie;
console.log(cookies);

//

var demo = "123;123*123'123/ 123";
console.log(demo);
console.log(escape(demo));
console.log(unescape(escape(demo)));

// mejor forma de hacer cookies

function crearCookie(nombre, valor) {
    //
    valor = escape(valor);
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth + 1);

    //document.cookie = nombre +"="+ valor+";";
    document.cookie = nombre +"="+ valor+";expires="+toUTCString()+";";
}

function borrarCookie(nombre) {
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth - 1);

    document.cookie = nombre +"="+ x +";expires="+toUTCString()+";";
}

function getCookie(nombre){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);
    
    for(var i = 0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if (parArr[0] === nombre) {
            return unescape(parArr[1]);
        }
    }

    return undefined;
}
console.log(getCookie("correo"));

crearCookie("nombre", "fernando");
crearCookie("correo", "fernando.herrera85@gmail.com");
borrarCookie("nombre");


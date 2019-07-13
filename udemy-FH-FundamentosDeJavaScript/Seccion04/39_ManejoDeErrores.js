/**
 * 
 */ 


try {
    var a = 100;
    
    if (a === 100) {
        throw "que mal";
    } else {
        throw 'oh oh!';
    }
    

    console.log("El valor de:", a);
    console.log("El valor de: " + a);
}
catch(e) {
    if (e === "que mal") {
        console.log("Error tipo 1");
    }
    if (e === "oh oh!"){
        console.log("Error tipo 2");
    }
}
finally {
    console.log("Finalmente");
}


try {
    throw new Error("Error tipo 1");
    console.log("Esta parte nunca se ejecuta");
}
catch(e) {
    console.log(e);
    console.log(e.message);

}
finally {
    console.log("Finalmente");
}

try {
    throw {
        nombreError : "Error tipo 1",
        accion : "Salir corriendo a echarle agua al servidor",
        coderror : 1
    }
    console.log("Esta parte nunca se ejecuta");
}
catch(e) {
    console.log(e);
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.coderror);
    console.log("Parte del catch");   
}
finally {
    console.log("Finalmente");
}

try {
    throw function(){
        console.log("Función del throw...");
    }
    console.log("Esta parte nunca se ejecuta");
}
catch(e) {
    e();
    console.log("Parte del catch");   
}
finally {
    console.log("Finalmente");
}

//------------
try {
    throw 1; //n cualquier numero
    console.log("Esta parte nunca se ejecuta");
}
catch(e) {
    registroError(e);   
}
finally {
    console.log("Finalmente");
}

function registroError(e) {
    var ahora = new Date();
    console.log("Se registro un error: ", e, "A las : ", ahora.getTime());
}
// 24. Promises

/**
 * Cuando realizas un llamado asincrono a una API por ejemplo, solamente hay 2 opciones,
 * que el código ejecute bien y funcione, o que el código y el llamado al API fallen.
 * Es con los promises en las que puedes manejar varios escenarios.
 */

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true;

        if (descuento) {
            resolve("Descuento aplicado");
        } else {
            reject("No se pudo aplicar el descuento");
        }
    }, 3000);
});

//console.log(aplicarDescuento);
aplicarDescuento.then(resultado => {
    console.log("UNO " + resultado);
});

aplicarDescuento
    .then(resultado => {
        console.log("DOS " + resultado);
    })
    .catch(error => {
        console.log("ERROR " + error);
    });

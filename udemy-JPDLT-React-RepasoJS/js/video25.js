// 25. Promises con Ajax

/**
 * El uso de Promises lo vas a encontrar utilizando tanto AJAX como Fetch API.
 */

const descargarUsuario = cantidad =>
    new Promise((resolve, reject) => {
        // pasar la cantidad a la API
        const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

        // llamado a AJAX
        const xhr = new XMLHttpRequest();
        // abrir la conexión
        xhr.open("GET", api, true);
        // on load
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText).results);
            } else {
                reject(Error(xhr.statusText));
            }
        };
        // opcional (on error)
        xhr.onerror = error => reject(error);
        // enviar
        xhr.send();
    });

//console.log(descargarUsuario(20));

descargarUsuario(20).then(
    miembros => console.log(miembros),
    error => console.error(new Error("Hubo un error " + error))
);

// 11. Template Strings en JS

const nombre = "Juan";
const trabajo = "Desarrollador Web";

console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector("#app");

let html =
    "<ul>" +
    "<li>Nombre: " +
    nombre +
    "</li>" +
    "<li>Nombre: " +
    trabajo +
    "</li>" +
    "</ul>";

let htmlDos = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Nombre: ${trabajo}</li>
    </ul>
`;

contenedorApp.innerHTML = htmlDos;

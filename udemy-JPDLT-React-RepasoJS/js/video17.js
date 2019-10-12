// 17. Prototypes

//-> Object Literal
const persona = {
    nombre: "Juan",
    profesion: "Desarrollador web",
    edad: 50
};
console.log(persona);

//-> Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// Agregar un prototype
Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una propiedad de ${this.urgencia}`;
};
// crear una nueva tarea
const tarea1 = new Tarea("Aprender JS", "Urgente");
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
const tarea2 = new Tarea("Aprender CSS", "Basic");
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());

// 14. Arrow Functions

// let viajando = function(destino) {
//     return `Viajando a la ciudad de: ${destino}`;
// };

let viajando = destino => `Viajando a la ciudad de: ${destino}`;
let viaje;

viaje = viajando("Paris");
viaje = viajando("Londres");
viaje = viajando("Barcelona");

console.log(viaje);

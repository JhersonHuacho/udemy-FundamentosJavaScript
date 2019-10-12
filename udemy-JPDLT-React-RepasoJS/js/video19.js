// 19. Object Literal Enhacement

/**
 * Esto es lo contrario de destructuring.
 * Este los coloca juntos
 */

const banda = 'Metalica';
const genero = 'Heavy Metal';
const canciones = ['Master Of Puppets','Seek & Destroy','Enter Sandman'];

// forma anterior
const metallica = {
    banda : banda,
    genero : genero,
    canciones : canciones
}

console.log(metallica);

// forma nueva
const metallicaNew = { banda, genero, canciones };

console.log(metallicaNew);
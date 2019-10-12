// 10. Scope en JS

/*
El scope en una variable es saber o en que parte de tu programa, 
un valor de una variable esta disponible o no esta disponible.
*/

// Scope con var
var musicaVar = "Rock";

if (musicaVar) {
    var musicaVar = "Grunge";
    console.log("dentro del ifcon VAR: ", musicaVar);
}
console.log("Fuera del IF con VAR: ", musicaVar);

// Scope con let
let musicaLet = "Rock";

if (musicaLet) {
    let musicaLet = "Grunge";
    console.log("dentro del if con LET: ", musicaLet);
}
console.log("Fuera del IF con LET: ", musicaLet);

// Scope con const
const musicaConst = "Rock";

if (musicaConst) {
    const musicaConst = "Grunge";
    console.log("dentro del if con CONST: ", musicaConst);
}
console.log("Fuera del IF con CONST: ", musicaConst);

// 22. Spread Operator

/**
 * 
 */

 let lenguajes = ['JavaScript','PHP','Python'];
 let frameworks = ['ReactJS','Laravel','Django'];

 let combinaciones = lenguajes.concat(frameworks);
 console.log(combinaciones);

 let combinacionesNew = [...lenguajes, ...frameworks];
 console.log(combinacionesNew);

// otro caso porque usar
let lenguajesDos = ['JavaScript','PHP','Python'];
let [ultimo] = lenguajesDos.reverse();
lenguajesDos.reverse();
console.log(lenguajesDos);
console.log(ultimo);

let lenguajesTres = ['JavaScript','PHP','Python'];
let [ultimoDos] = [...lenguajesTres].reverse();
console.log(lenguajesTres);
console.log(ultimoDos);

// otro uso
function suma(a,b,c) {
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(numeros);
suma(...numeros);
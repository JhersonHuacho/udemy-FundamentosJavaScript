// 22 arreglos
const numeros = [10,20,30,40,50];
console.log(numeros);

const meses = new Array('Enero', 'Febrero','Marzo','Abril');
console.log(meses);
console.log(meses.length);
console.log(Array.isArray(meses));
console.log(meses[3]);
meses[3] = 'Mayo';
console.log(meses[3]);
meses.push('Junio');
console.log(meses);

// 23 Arreglos
// encontrar un elemento en el arreglo
console.log(meses.indexOf('Mayo'));
// añadir al inicio del arreglo
meses.unshift('Mes 0');
// eliminar un elemento de un arreglo
meses.pop();
//eliminar un elemnto de un arreglo (el primero)
meses.shift();
// quitar un rango
meses.splice(2,2);
// revertir
meses.reverse();
// unir un arreglo con otro
let arreglo1 = [1,2,3];
let arreglo2 = [9,8,7];
console.log(arreglo1.concat(arreglo2));

// 24 arreglos
// Ordenar un arreglo
const frutas = ['Platano','Manzana','Fresa','Naranja'];
console.log(frutas);
frutas.sort();
console.log(frutas);

// Ordenar numeros
arreglo1 = [3,9,91,92,23,45,21,56];
arreglo1.sort();
console.log(arreglo1);
arreglo1.sort(function(x, y){
    return x - y;
});
console.log(arreglo1);













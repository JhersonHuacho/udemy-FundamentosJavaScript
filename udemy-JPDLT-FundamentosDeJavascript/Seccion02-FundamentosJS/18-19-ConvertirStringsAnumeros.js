const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

console.log(numero1 + numero2);
console.log(typeof Number(numero1));
console.log(typeof parseInt(numero1));
console.log(Number(numero3)); //NaN
console.log(numero1);

let dato;
dato = Number("20");
dato = Number('20.10931');
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number('hola mundo');

dato = parseFloat('100');
dato = parseFloat('100.2030');
dato = parseInt('100.2030');
console.log(dato);

dato = 100;
console.log(dato.toFixed());
/**
 * 34. Expresiones Regulares:
 * Las expresiones regulares son un mecanismo excelente para buscar información dentro de cadenas de caracteres.
 * Normalmente le usamos para buscar a ver si que consigue un patron, o si encaja algo, o queremos revisar si una 
 * palabra esta dentro de un string, etc. 
 * 
 * como se defininen este tipos de expresiones en JS?
 * hay 2 maneras:
 *  -   La explicita: usando el constructor y un literal que simplemente se define en el momento
 *  -   
 */

 // reg1 y reg2 son lo mismo
 var reg1 = RegExp("a");
 var reg2 = /a/;

 var texto = "Hola Mundo, 12345.";

 // hay una instrucción de todos los strings en su prototipo para hacer una evaluación o una expresión regular
texto.match(/a/);
texto.match(reg1); // esta instrucción de aqui regresa un arreglo si u solo si por lo menos una vez aparecio nuestra evaluación, caso contrario regresa un null.
 var arr = texto.match(reg1);
 console.log(arr);
 var arrDos = texto.match(/^a/);
 var arr3 = texto.match(/a$/);
 var arr4 = texto.match(/.../);
 var arr5 = texto.match(/^.o/);
 var arr6 = texto.match(/[0-9]/);
 var arr7 = texto.match(/[06789]/);
 var arr8 = texto.match(/[026789]/);
 var arr9 = texto.match(/[a-z]/);
 var arr10 = texto.match(/[a-zA-Z]/);
 var arr11 = texto.match(/^H[a-z]/);
 var arr12 = texto.match(/^H[aeiou]/);
 var arr13 = texto.match(/[aeiou].$/);
 var arr14 = texto.match(/[aeiou]./);
 var arr15 = texto.match(/ /); // no recomendable
 var arr16 = texto.match(/\s/); // buscame cualquier separación que haya
 var arr17 = texto.match(/\w/); // [a-zA-Z0-9] = [\w]
 var arr18 = texto.match(/\d/); // es igual a decir [0-9]
 // hay 3 controladores
 // i = insensible
 // g = todas apariciones
 // m = multilinea
 var arr19 = texto.match(/m/i);
 var arr20 = texto.match(/[aeiou]/g);
 var arr21 = texto.match(/[aeiou]/ig);
 var textoDos = "Hola mundo.\nQué tal?";
 console.log(textoDos);
 var arr22 = texto.match(/[aeiou]|é/ig);
// 
var textoTres = "Holaa mundoo";
var arr23 = textoTres.match(/o+/g);
var arr24 = textoTres.match(/o{2}/);
var arr25 = textoTres.match(/o{2,}/);
var arr11 = textoTres.match(/o{2,3}/);
// ^ = busca al principio = alt + 92 
 // $ = busca al final
 // . = significa cualquier caracter

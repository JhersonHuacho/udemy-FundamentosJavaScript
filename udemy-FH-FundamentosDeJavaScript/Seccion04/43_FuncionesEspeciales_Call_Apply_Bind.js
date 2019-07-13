/**
 * Toda función en JavaScript tiene 3 métodos que estan en su prototipo llamados:
 *      - Call():
 *      - Apply():
 *      - Bind():
 * 
 */

 var carro = {
     color : "Blanco",
     marca : "Mazda",
     imprimir : function() {
         var salida = this.marca + " - " + this.color;
         return salida;
     }
 }

 console.log(carro.imprimir());

 var logCarro = function(arg1, arg2) {
     console.log("Carro :", this.imprimir());
     console.log("Argumentos:", arg1, arg2);
     console.log("============================");

 }

 logCarro();

 /** 
  * ahorita el THIS apunta al objeto global,
  * con el BIND() yo puedo decirle, que en vez que apunte al objeto global, puedo decirle
  * que apunte al objeto carro.
  * 
  * El BIND a pesar que tiene los parentesis, lo que hace es setaer esto "(carro)" en el THIS,
  * pero no invoca la funcion "logCarro", invoca el método BIND.
  */
 var logModeloCarro = logCarro.bind( carro );
logModeloCarro();
logModeloCarro("abc", "xyz");


/**
 * cual es la diferencia entre el call() y el apply()?
 * son casi iguales, exceptuando de que en el apply lo que espera son 2 parametros(objeto, arreglo),
 */

 logModeloCarro.call(carro, "123", "456");
 logModeloCarro.apply(carro, ["asd", "qwe"]);

/**
 * para que me sirven?
 * nos sirven para funciones prestadas.
 */

var carro2 = {
    color : "Rojo",
    marca : "Toyota"
}

console.log(carro.imprimir.call(carro2));











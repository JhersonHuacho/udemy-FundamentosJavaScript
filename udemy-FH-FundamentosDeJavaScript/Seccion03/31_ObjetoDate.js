/**
 * hay una libreria para manejos de fechas, momentjs.com
 */
var hoy = new Date();
console.log(hoy);

var fechaMilisegundos = new Date(1);
console.log(fechaMilisegundos);

//var fechaFija = new Date(anio, mes, dia, hora, min, seg, milisegundo);
var fechaFija = new Date(2016, 9, 21, 23, 10, 15, 1);
console.log(fechaFija);

console.log(hoy.getFullYear());
console.log(hoy.getDate(), hoy.getHours(), hoy.getMilliseconds(), hoy.getMonth(), hoy.getSeconds());
console.log(hoy.getTime(), "Este dato es la representación numerica en milisegundos de una fecha");

var inicio = new Date();
for(var i = 0; i < 15000 ; i++) {
    console.log("Algo....");
}
var fin = new Date();

console.log(inicio);
console.log(fin);

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");
console.log(duracion/1000, "segundos");



var PI = Math.PI;
var E = Math.E;
console.log(PI);
console.log(E);

var num1 = 10.456789;
console.log(num1);
console.log(Math.round(num*100)/100);

console.log(Math.floor(num1));

var rnd = Math.random();
console.log(rnd);

function randomEntre(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

console.log(randomEntre(1, 6));
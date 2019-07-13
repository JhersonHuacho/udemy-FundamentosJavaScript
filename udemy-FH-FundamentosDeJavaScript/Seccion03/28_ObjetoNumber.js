var a = 10;
var b = new Number(10);

// a === b => false
// a == b => true

a = 10.456789;
console.log(a.toFixed(2)); // 10.46

a = 10.456789;
console.log(a);
console.log(a.toPrecision(4));

var b = new Number("20");
console.log(b);
console.log(b.valueOf);
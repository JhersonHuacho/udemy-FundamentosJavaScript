var Persona = function() {
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18;
}

var juan = new Persona();

Persona.prototype.direccion = "San José";

for ( propiedad in juan )
{
    console.log(juan.hasOwnProperty( propiedad ));
    console.log(propiedad, ";" ,juan[propiedad]);
}

for (num in [1,2,3,4,5,6,7,8,9,10])
{
    console.log(num);
}

[1,2,3,4,5,6,7,8,9,10].forEach(function(valor){
    console.log(valor);
})
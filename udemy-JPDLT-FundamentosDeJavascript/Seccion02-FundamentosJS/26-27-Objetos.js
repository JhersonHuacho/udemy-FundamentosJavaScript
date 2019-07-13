const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador grafico',
    email: 'correo@correo.com',
    edad: 20,
    musica: ['Trance','Rock','Grunge'],
    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.apellido);
console.log(persona.musica);
persona.musica.push('huayno');
console.log(persona.musica);
console.log(persona.hogar.ciudad);
console.log(persona['apellido']);
console.log(persona.nacimiento);

// Arreglo de objetos
const autos = [
    {
        modelo: 'Mustang',
        motor: 6.0
    },
    {
        modelo: 'Camaro',
        motor: 6.1
    },
    {
        modelo: 'Challenger',
        motor: 6.3
    }
]

console.log(autos);
console.log(autos[0].modelo);

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].modelo);
}






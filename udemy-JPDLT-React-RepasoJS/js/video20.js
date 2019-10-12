// 19. Metodos o Funciones en un Objeto

/**
 * this es la forma en que accedes a los valores del mismo objeto
 */

const persona = {
    nombre: 'Juan',
    trabajo: 'Desarrollador Web',
    edad: 500,
    musicaRock: true,
    mostrarInformacion: function() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    },
    mostrarInformacionDos() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
};

persona.mostrarInformacion();
persona.mostrarInformacionDos();
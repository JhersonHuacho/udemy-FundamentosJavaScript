// 13. Funciones con parametros - parametros por default

// parametros por default en las funciones

function actividad(nombre = "nombreDefault", actividad = "actividadDefault") {
    console.log(
        `La persona ${nombre}, esta realizando la actividad ${actividad}`
    );
}

actividad("Juan", "Aprender JS");
actividad("Nombre", "Creando un Web Site");
actividad("Antonio");
actividad();

const actividadDos = function(
    nombre = "nombreDefault",
    actividad = "actividadDefault"
) {
    console.log(
        `La persona ${nombre}, esta realizando la actividad ${actividad}`
    );
};

actividadDos("Juan", "Aprender JS");
actividadDos("Nombre", "Creando un Web Site");
actividadDos("Antonio");
actividadDos();

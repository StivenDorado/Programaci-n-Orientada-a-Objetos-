class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludo() {
        return 'Hola, soy ' + this.nombre;
    }

    informacion() {
        return 'Persona: nombre: ' + this.nombre + ', apellido: ' + this.apellido;
    }
}

class Diseñador extends Persona {
    constructor(nombre, apellido, lenguaje) {
        super(nombre, apellido);
        this.lenguaje = lenguaje;
    }

    saludo() {
        return 'Hola, soy diseñador ' + this.nombre;
    }

    informacion() {
        return 'Diseñador, nombre: ' + this.nombre + ', apellido: ' + this.apellido + ', lenguaje: ' + this.lenguaje;
    }
}

let objDiseñador = new Diseñador('Stiven', 'Dorado', 'Js');
console.log(objDiseñador.informacion()); 
console.log(objDiseñador.saludo()); 

// Creación de un arreglo de personas (incluyendo un Diseñador)
let arregloPersonas = [new Persona('carlitos', 'tru'), new Diseñador('luisita', 'rivers', 'js')];

// Iterando sobre el arreglo de personas usando forEach
arregloPersonas.forEach(persona => {
    console.log(persona.saludo());
});

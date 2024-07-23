class Continente {
    constructor(nombre, poblacion) {
        this._nombre = nombre;
        this._poblacion = poblacion;
    }

    informacionContinente() {
        console.log(`Información del continente: Nombre ${this._nombre}, Población ${this._poblacion}`);
    }
}

class Pais extends Continente {
    constructor(pais, nombre, poblacion) {
        super(nombre, poblacion);
        this._pais = pais;
    }

    informacionPais() {
        console.log(`Información del país: Nombre ${this._pais}, Continente ${this._nombre}`);
    }
}

// Instancias
let africa = new Continente('África', 10000);
africa.informacionContinente();

let egipto = new Pais('Egipto', 'África', 23193261);
egipto.informacionPais();

class Animal {
    constructor(nombre, especie, raza) {
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
    }
    
    /* informacionAdicional() {
        return 'Animal nombre: ' + this.nombre + ', especie: ' + this.especie + ', raza: ' + this.raza;
    } */

    setAlimentacion(alimentacion) {
        this.alimentacion = alimentacion;
    }

    getAlimentacion() {
        return this.alimentacion;
    }
}

export default Animal
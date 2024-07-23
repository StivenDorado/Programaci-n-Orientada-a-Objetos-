import Animal from "./animal.js";

class Perro extends Animal {
    constructor(nombre, especie, raza, domestico) {
        super(nombre, especie, raza); 
        this.domestico = domestico;
    }

    informacionPerro() {
        return 'Animal nombre: ' + this.nombre + ', especie: ' + this.especie + ', raza: ' + this.raza;
    }
}


export default Perro
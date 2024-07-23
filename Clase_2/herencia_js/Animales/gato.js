import Animal from "./animal.js ";
class Gato extends Animal {
    constructor(nombre, especie, raza) {
        super(nombre, especie, raza); 
        this.sonido = ''; 
    }

/*     setSonido(sonido) {
        this.sonido = sonido;
    }

    getSonido() {
        return this.sonido;
    }
 */
    informacionAdicional() {
        return 'Animal nombre: ' + this.nombre + ', especie: ' + this.especie + ', raza: ' + this.raza;
    }
}


export default Gato
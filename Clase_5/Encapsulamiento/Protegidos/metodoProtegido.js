class Zoologico {
    constructor(nombreZoo, numZona) {
        this._nombreZoo = nombreZoo;
        this.numZona = numZona;

        // Método Privado
        this.obtenerNombreZ = () => {
            return this._nombreZoo;
        };
    }

    infoZoo() {
        console.log(`El nombre del Zoologico es: ${this.obtenerNombreZ()} y el número de zonas es: ${this.numZona}`);
    }
}

class AnimalesAcuaticos extends Zoologico {
    constructor(nombre, especie, nombreZoo, numZona) {
        super(nombreZoo, numZona);
        this.nombre = nombre;
        this.especie = especie;
    }

    infoEspecie() {
        console.log(`El nombre del animal es: ${this.nombre}. La especie es: ${this.especie}. Nombre del Zoologico: ${this.obtenerNombreZ()}`);
    }
}

// Instancias
let cali = new Zoologico('Zoo Cali Ve', 4);
cali.infoZoo();

let agua = new AnimalesAcuaticos('tiburón', 'acuático', 'Zoologico Cali Ve', 42);
agua.infoEspecie();

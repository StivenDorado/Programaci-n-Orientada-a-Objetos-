class AutoCombustion {
    constructor(nivelCombustible) {
        this.nivelCombustible = nivelCombustible;
    }

    // Métodos
    llenarTanque(cantidad) {
        this.nivelCombustible += cantidad;
        console.log('Cantidad de carga: ' + this.nivelCombustible + '%');
    }

    estadoCombustible(uso) {
        this.nivelCombustible -= uso;
        console.log('Uso de combustible: ' + this.nivelCombustible + '%');
    }
}

export default AutoCombustion;

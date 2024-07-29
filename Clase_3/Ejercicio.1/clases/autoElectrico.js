class AutoElectrico {
    constructor(nivelBateria) {
        this.nivelBateria = nivelBateria;
    }

    // Métodos
    cargarBateria(carga) {
        this.nivelBateria += carga;
        console.log('Carga de actual: ' + this.nivelBateria + '%');
    }

    estadoBateria(uso) {
        this.nivelBateria -= uso;
        console.log('Uso de Batería: ' + this.nivelBateria + '%');
    }
}

export default AutoElectrico;

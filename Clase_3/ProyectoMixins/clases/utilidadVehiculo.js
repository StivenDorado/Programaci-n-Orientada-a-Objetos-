import Carro from "./carro.js";
import Tractomula from "./tractomula.js";

class UtilidadVehiculo {
    constructor() {
        this.carro = new Carro(1);
        this.tractomula = new Tractomula(40);
    }

    // Metodos 
    userCarro() {
        this.carro.transportarPasajerps();
    }

    userTractomula() {
        this.tractomula.cargarMercancia();
        this.tractomula.descargarMercancia();
    }
}

export default UtilidadVehiculo
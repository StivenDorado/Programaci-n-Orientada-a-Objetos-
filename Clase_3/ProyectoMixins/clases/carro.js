import PasajerosMixin from "../Mixins/pasajerosMixin.js";
class Carro {
    constructor(numPasajeros) {
        this.numPasajeros = numPasajeros;
        Object.assign(this, PasajerosMixin)
    }
}

export default Carro
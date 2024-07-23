import CargebleMixin from "../Mixins/cargablemixins.js"

class Tractomula {
    constructor(capacidadCarga) {
        this.capacidadCarga = capacidadCarga;
        Object.assign(this, CargebleMixin)
    }
}
export default Tractomula;
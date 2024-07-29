import AutoCombustion from "./autoCombustion.js";
import AutoElectrico from "./autoElectrico.js";

class AutoHibrido {
    constructor() {
        this.autoCombustion = new AutoCombustion(50);
        this.autoElectrico = new AutoElectrico(20);
    }

    // Métodos del auto eléctrico
    cargarBateria(carga) {
        this.autoElectrico.cargarBateria(carga);
    }

    usarBateria(uso) {
        this.autoElectrico.estadoBateria(uso);
    }

    // Métodos del auto de combustión
    llenarTanque(cantidad) {
        this.autoCombustion.llenarTanque(cantidad);
    }

    estadoCombustible(usos) {
        this.autoCombustion.estadoCombustible(usos);
    }
}

export default AutoHibrido;

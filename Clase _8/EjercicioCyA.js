class Smartphone {
    constructor(marca, voltaje, numSim, modelo) {
        this.bateria = new Bateria(marca, voltaje); // Composición
        this.numSim = numSim;
        this.modelo = modelo;

        // Array
        this.chips = []; // Agregación
    }

    agregarChip(chip) {
        this.chips.push(chip);
    }

    mostrarInfo() {
        let chipDatos = "";
        for (let i = 0; i < this.chips.length; i++) {
            chipDatos += this.chips[i].mostrarInfoCh();
        }
        return `Modelo: ${this.modelo} Número Sim: ${this.numSim} Datos: ${chipDatos}`;
    }
}

// Composición
class Bateria {
    constructor(marca, voltaje) {
        this.marca = marca;
        this.voltaje = voltaje;
    }

    mostrarInfoBa() {
        return `Batería: ${this.marca} ${this.voltaje}`;
    }
}

// Agregación
class Chip {
    constructor(numSim, empresa) {
        this.numSim = numSim;
        this.empresa = empresa;
    }

    mostrarInfoCh() {
        return `Empresa: ${this.empresa}, Número Sim: ${this.numSim}`;
    }
}

// Instancias
let smartphone1 = new Smartphone('Samsung', '5000mAh', 'S240', '2153');

let chip1 = new Chip('42121214', 'Won');
let chip2 = new Chip('63498213', 'Movistar');
smartphone1.agregarChip(chip1);
smartphone1.agregarChip(chip2);

console.log(smartphone1.mostrarInfo());

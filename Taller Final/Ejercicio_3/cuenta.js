class CuentaBancaria {
    #tipocuenta;
    
    constructor(nombreTitular, saldo, tipocuenta) {
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
        this.#tipocuenta = tipocuenta;
    }

    depositar(monto) {
        this.saldo += monto; // Agregar el saldo con el monto a depositado
    }

    retirar(monto) {
        this.saldo -= monto; // Agregar el saldo con el monto a retirado
    }

    consultarSaldo() {
        return this.saldo;
    }

    mostrarInformación() {
        return `El nombre del Titular es: ${this.nombreTitular}
        El saldo de su cuenta es: ${this.saldo}
        El tipo de cuenta es: ${this.#tipocuenta}`;
    }
}

// Instancias 
const cuenta1 = new CuentaBancaria('Pablo Escobar', 250000000000, 'Ahorro de Cocaína');

// Agregar saldo y quitar
cuenta1.depositar(1000000000000);
cuenta1.retirar(500000000000);

console.log(cuenta1.mostrarInformación());

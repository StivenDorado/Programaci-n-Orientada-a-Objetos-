// Creación de la clase Prestamo
class Prestamo {
    // Constructor principal
    constructor(id, nombre, valorPrestamo, valorPrestamoIntereses, fecha, valorIntereses, numeroCuotas) {
        this.id = id;
        this.nombre = nombre;
        this.valorPrestamo = valorPrestamo;
        this.valorPrestamoIntereses = valorPrestamoIntereses;
        this.fecha = fecha;
        this.valorIntereses = valorIntereses;
        this.numeroCuotas = numeroCuotas;
    }

    // Método para calcular el valor total del préstamo incluyendo intereses, cuotas y el préstamo inicial
    calcularValorTotalPrestamo() {
        this.valorPrestamoIntereses = this.valorPrestamo * this.valorIntereses * this.numeroCuotas + this.valorPrestamo;
    }

    // Método para calcular el valor a pagar mensualmente con intereses
    ValorPagarCuotasInteres() {
        return this.valorPrestamoIntereses / this.numeroCuotas;
    }

    // Método para calcular el valor a pagar mensualmente sin intereses
    valorPagarCuotas() {
        return this.valorPrestamo / this.numeroCuotas;
    }

    // Método para realizar el pago de una cuota específica
    pagarCuota(valorPagar) {
        if (this.valorPrestamoIntereses >= valorPagar) {
            this.valorPrestamoIntereses -= valorPagar;
            console.log('Has pagado tu deuda.');
        } else {
            console.log('No puedes pagar tu deuda.');
        }
    }

    // Método para refinanciar el préstamo con un nuevo número de cuotas
    refinanciar(nuevoCuotas) {
        this.numeroCuotas = nuevoCuotas;
        this.calcularValorTotalPrestamo(); // Recalcula el valor total con las nuevas cuotas
        console.log(`El nuevo número de cuotas es: ${this.numeroCuotas}`);
    }

    // Método para mostrar la información del préstamo
    toString() {
        return `${this.nombre}, identificado con cédula de ciudadanía ${this.id}, realizó el ${this.fecha} un préstamo por un valor de ${this.valorPrestamo}, con intereses del ${this.valorIntereses} a ${this.numeroCuotas} cuotas. Total a pagar: ${this.valorPrestamoIntereses}`;
    }
}

// Ejemplo de uso de la clase Prestamo
let valorPrestamo = new Prestamo(100234875, 'Brandon', 200000, 0, '09-07-2024', 0.1, 6);

// Ejecución de métodos
valorPrestamo.calcularValorTotalPrestamo();
console.log(valorPrestamo.toString()); // Muestra la información del préstamo
console.log(`Valor a pagar mensualmente con intereses: ${valorPrestamo.ValorPagarCuotasInteres()}`);
console.log(`Valor a pagar mensualmente sin intereses: ${valorPrestamo.valorPagarCuotas()}`);

// Ejecución del método pagarCuota y refinanciar
valorPrestamo.pagarCuota(150000);
console.log(`Valor pendiente después de pagar la cuota: ${valorPrestamo.valorPrestamoIntereses}`);
valorPrestamo.refinanciar(2);

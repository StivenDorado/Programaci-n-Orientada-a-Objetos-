// Definición de la clase Prestamo
class Prestamo {
    //Contructor por defecto
    constructor (numDoc, nombre, valorPrestamo, valorPrestamoInteres, valorInteres, fechaPrestamo, numCuotas) {
        this.numDoc = numDoc;
        this.nombre = nombre;
        this.valorPrestamo = valorPrestamo;
        this.valorPrestamoInteres = valorPrestamoInteres;
        this.valorInteres = valorInteres;
        this.fechaPrestamo = fechaPrestamo;
        this.numCuotas = numCuotas;
    }
    // Contrustor con el documento y el nombre
    constructor1 (numDoc, nombre){
        this.numDoc = numDoc;
        this.nombre = nombre;
    }

    /* Metodos */

    /* 1. Calcular valor total del préstamo*/
    CalcularValorTotalPrestamo() {
        this.valorPrestamo = this.valorPrestamoInteres * this.numCuotas 
    }
    
    /* 2. Calcular valor a pagar mensualmente con intereses */
    ValorPagarCuotaslnteres(){
        this.valorPrestamoInteres * this.numCuotas;
    }

    /* 3. Calcular valor a pagar mensualmente sin intereses */
    ValorPagarCuotas () {
        this.valorPrestamo * this.numCuotas;
    }

    /* 4. Pagar una cuota específica */
    PagarCuota( valorPagar ){
        this.valorPrestamo = this.numCuotas - this.valorPrestamoInteres
    }

    /* 5. Refinanciar el préstamo con un nuevo número de cuotas */
    Refinanciar() {
        this.numCuotas = this.CalcularValorTotalPrestamo
    }

    /* 6. Mostrar la información del préstamo */
    toString() {

    }
}

/* Instancias */
let prestamo1 = new Prestamo(1, 'Edu', '22-03-30')
let prestamo2 = new Prestamo()
let prestamo3 = new Prestamo()
let prestamo4 = new Prestamo()
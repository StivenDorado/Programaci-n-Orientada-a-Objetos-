let protegido = new WeakMap();

class Empleado{
    #salario;
    nombre;
    constructor(nombre, salario) { 
        this.nombre = nombre;
        this.#salario = salario;

        // Metodo Protegido
        this.obtenerSalario = () => {
            return this.#salario;
        }
    }

    obtenerInformacion() {
        console.log(`Informacion del emleado ${this.nombre} salario ${this.#salario}`)
    }
}

export default Empleado;
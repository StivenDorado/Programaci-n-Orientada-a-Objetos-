class Casa{
    constructor(direccion) {
        this.direccion = direccion;
        this.habitaciones = []
    }

    agregarHabitacion(habitacion) {
        let habitacion = new Habitaciones(nombre, superficie)
        this.habitaciones.push(habitacion)
    }

    mostrarInformacion() {
        let datosh = "";
        for (let i = 0; i < this.habitaciones.length; i++) {
            datosh+=this.habitaciones[i].nombre;
        }
        return `La habitación ${this.direccion} tiene una superficie de ${this.datosh}`
        
    }
}

class Habitaciones{
    constructor(nombre, superficie) {
        this.nombre = nombre;
        this.superficie = superficie;
    }

    mostrarInformacion() {
        return `Departamento: ${this.nombre}, Codigo: ${this.codigo}`
    }

}

let casa1 = new Habitaciones('Habitacion', 'Calle 78')
casa1.agregarHabitacion('departamento', '213')
console.log(casa1.mostrarInformacion())
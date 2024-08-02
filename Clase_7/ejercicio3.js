class Casa {
    constructor(direccion) {
        this.direccion = direccion;
        this.habitaciones = [];
    }

    agregarHabitacion(nombre, superficie) {
        let habitacion = new Habitacion(nombre, superficie);
        this.habitaciones.push(habitacion);
    }

    mostrarInformacion() {
        let datosHabitaciones = "";
        for (let i = 0; i < this.habitaciones.length; i++) {
            datosHabitaciones += this.habitaciones[i].mostrarInformacion() + "\n";
        }
        return `La casa en ${this.direccion} tiene las siguientes habitaciones:\n${datosHabitaciones}`;
    }
}

class Habitacion {
    constructor(nombre, superficie) {
        this.nombre = nombre;
        this.superficie = superficie;
    }

    mostrarInformacion() {
        return `Habitación: ${this.nombre}, Superficie: ${this.superficie}m2`;
    }
}

// Instancias
let casa1 = new Casa('Calle 78');
casa1.agregarHabitacion('Sala', 20);
casa1.agregarHabitacion('Cocina', 15);
casa1.agregarHabitacion('Dormitorio', 25);

console.log(casa1.mostrarInformacion());

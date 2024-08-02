class Empleado {
    constructor(nombre, objdepartamento) {
        this.nombreCompleto = nombre;
        this.departamento = objdepartamento;
    }
    
    mostrarInformacion() {
        return `Nombre: ${this.nombreCompleto}`;
    }
}

class Departamento {
    constructor(nombreDep, codigo) {
        this.nombreDep = nombreDep;
        this.codigo = codigo;
        this.empleados = [];
    }

    agregarEmpleados(objEmpleado) {
        this.empleados.push(objEmpleado);
    }

    mostrarEmpleados() {
        let datosEmpleados = "";
        
        for (let i = 0; i < this.empleados.length; i++) {
            datosEmpleados += this.empleados[i].mostrarInformacion() + "\n";
        }
        
        return `Departamento: ${this.nombreDep}\nCódigo: ${this.codigo}\nEmpleados:\n${datosEmpleados}`;
    }

    mostrarDepartamento() {
        console.log(this.nombreDep + " " + this.codigo + "\n" + this.mostrarEmpleados());
    }
}

// Instancias
let RV = new Departamento('Recursos Veganos', '001');
let pedro = new Empleado('Pablito Escobar', RV);
RV.agregarEmpleados(pedro);
console.log(RV.mostrarEmpleados());
RV.mostrarDepartamento();

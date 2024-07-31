class Empleado{
    constructor(nombre, objdepartamento) {
        this.nombreCompleto = nombre;
        this.departamento = objdepartamento;
    }
    
    mostrarInformacion() {
        return `Nombre: ${this.nombreCompleto}`
    }
}

class Departamento{
    constructor(nombreDep, codigo) {
        this.nombreDep = nombreDep;
        this.codigo = codigo;
        this.empleados = [];
    }

    agregarEmpleados(objEmpleado) {
        this.empleados.push(objEmpleado)
    }

    mostrarEmpleados() {
        let datosEmpleados = "";
        
        for (let i = 0; i < this.empleados.length; i++) {
            datosEmpleados+=this.empleados[i].mostrarInformacion();
        }
        
        return `Departamento ${this.nombreDep} 
                Codifo ${this.codigo}
                Empleados: ${datosEmpleados}`
    }

    mostrarDepartamento() {
        console.log(this.nombre + this.codigo + this.mostrarEmpleados)
    }
}

// Intancias 
let pedro = new Empleado('Pablito Escobar');
let RV = new Departamento('Recursos Veganos', '001');
RV.agregarEmpleados(pedro);
console.log(RV.mostrarEmpleados());
RV.mostrarDepartamento();
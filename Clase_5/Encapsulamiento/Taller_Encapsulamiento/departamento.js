import Empleado from "./empleado.js";

class Departamento {
    constructor(nombreDep) {
        this.nombreDep = nombreDep;
        this.listaEmp = [];

    }

    agregarEmpleados(nombre) {
        this.listaEmp.push(nombre)
    }

    listaEmpleados() {
        this.listaEmp.forEach(empleado =>
            console.log(empleado.nombre)
        );
    }
} 

export default Departamento;
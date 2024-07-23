import Departamento from './departamento.js';

class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.departamentos = []; // No se define arriba porque es un arreglo
    }

    agregarDepartamentos(nombreDep) {
        this.departamentos.push(nombreDep)
    }

    listaDepartamentos() {
        this.departamentos.forEach(departamento =>
            console.log(departamento.nombreDep)
        )
    }
}
export default Empresa;
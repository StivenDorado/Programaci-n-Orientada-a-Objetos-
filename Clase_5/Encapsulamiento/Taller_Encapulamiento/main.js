import Empresa from './empresa.js';
import Departamento from './departamento.js';
import Empleado from './empleado.js';

// Intancias Empresa 
let miempresa = new Empresa('telcel');

// Instancias Departamentos
let Deudas = new Departamento('Deudas');
miempresa.agregarDepartamentos(Deudas); // Intancias Empresa 

let Recursos = new Departamento('Recursos Veganos');
miempresa.agregarDepartamentos(Recursos); // Intancias Empresa 

let Prima = new Departamento('Prima o tu Prima?');
miempresa.agregarDepartamentos(Prima) // Intancias Empresa 

miempresa.listaDepartamentos();

// Intancias Empleados 
let Empleado1 = new Empleado('juan', 20);
Deudas.agregarEmpleados(Empleado1);
Recursos.agregarEmpleados(Empleado1);

let Empleado2 = new Empleado('LaNA RO', 350000);
Prima.agregarEmpleados(Empleado2);
Deudas.listaEmpleados();
Prima.listaEmpleados();

// Informacion Empleados
Empleado1.obtenerInformacion();
Empleado2.obtenerInformacion();
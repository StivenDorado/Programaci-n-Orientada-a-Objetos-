class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    informacionPersona() {
        return 'Persona nombre: ' + this.nombre + ', edad: ' + this.edad;
    }
}

class Alumno extends Persona {
    constructor(nombre, edad, matricula) {
        super(nombre, edad);
        this.matricula = matricula;
    }

    informacionAlumno() {
        return 'Alumno nombre: ' + this.nombre
            + ', edad: ' + this.edad
            + ', matricula: ' + this.matricula;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, id, materia) {
        super(nombre, edad);
        this.id = id;
        this.materia = materia;
    }

    //Cuando cambia a Set materia deja de ser un metodo  y se llama como tal 
    set Materia(materia) {
        this.materia = materia;
    }

    get Materia() {
        return this.materia;
    }

    informacionProfesor() {
        return 'Profesor: Nombre: ' + this.nombre
            + ', edad: ' + this.edad
            + ', id: ' + this.id
            + ', materia: ' + this.materia;
    }
}

let objAlumno = new Alumno('Pepito Lopez', 17, '1234');
console.log(objAlumno.informacionAlumno());
console.log(objAlumno.informacionPersona());

let objProfesor = new Profesor('Fredi Vega', 30, '1234', 'estadistica');
console.log(objProfesor.informacionProfesor());
console.log(objProfesor.informacionPersona());

objProfesor.setMateria='álgebra'; // Aquí cambiamos la materia
console.log(objProfesor.getMateria); // Aquí obtenemos la materia actualizada

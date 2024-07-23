class Profesor {
    constructor(añosExperencia){
        this.añosExperencia = añosExperencia
    }

    informacionProfesor() {
        console.log(this.añosExperencia)
       /*  return 'años experiencia Profesor: ' + this.añosExperencia */
    }
}

class Programador {
    constructor(lenguaje) {
        this.lenguaje = lenguaje
    }
    informacionProgramador() {
        console.log(this.lenguaje)
        /* return 'Lenguaje Programmador: ' + this.lenguaje */
    }
}

// Clase Multiple :3
class Instructor {
    constructor() {
        this.profesor1 = new Profesor(2);
        this.programador1 = new Programador('JavaScrip');
    }
    
    // Metodos
    userProgramador() {
        this.programador1.informacionProgramador();
    }
    userProfesor() {
        this.profesor1.informacionProfesor();
    }
} 

// Intsncias 
let objinstructor = new Instructor();
// Uso de metodos
objinstructor.userProfesor();

objinstructor.userProgramador();

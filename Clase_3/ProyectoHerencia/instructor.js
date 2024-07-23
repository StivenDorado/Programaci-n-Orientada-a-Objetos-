import Profesor from './profesor.js';
import Programador from './programador.js';

class Instructor {
    constructor() {
        this.profesor = new Profesor(5214141);
        this.programador = new Programador('c#');
    }
    
    // Metodos
    userProgramador() {
        this.programador.informacionProgramador();
    }
    userProfesor() {
        this.profesor.informacionProfesor();
    }
} 

export default Instructor;

import Perro from "./perro.js";
import Gato from "./gato.js";


// Creación de objeto Perro
let miPerro = new Perro('Woffie', 'Canino', 'Muñeco de caricatura', true);
miPerro.informacionPerro();
console.log(miPerro.informacionPerro()); 

// Creación de objeto Gato
let miGato = new Gato('Mishi', 'Felino', 'gatito xd');
miGato.informacionGato();
console.log(miGato.informacionAdicional()); 

/* miGato.setSonido('Miau'); 
console.log(miGato.getSonido());  */
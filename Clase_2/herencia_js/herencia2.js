class Animal {
    constructor(nombre, especie, raza) {
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
    }
    
    informacionAdicional() {
        return 'Animal nombre: ' + this.nombre + ', especie: ' + this.especie + ', raza: ' + this.raza;
    }

    setAlimentacion(alimentacion) {
        this.alimentacion = alimentacion;
    }

    getAlimentacion() {
        return this.alimentacion;
    }
}

class Perro extends Animal {
    constructor(nombre, especie, raza, domestico) {
        super(nombre, especie, raza); 
        this.domestico = domestico;
    }
}

class Gato extends Animal {
    constructor(nombre, especie, raza) {
        super(nombre, especie, raza); 
        this.sonido = ''; 
    }

    setSonido(sonido) {
        this.sonido = sonido;
    }

    getSonido() {
        return this.sonido;
    }
}

// Creación de objeto Perro
let miPerro = new Perro('Woffie', 'Canino', 'Muñeco de caricatura', true);

console.log(miPerro.informacionAdicional()); 

miPerro.setAlimentacion('Croquetas'); 
console.log(miPerro.getAlimentacion()); 


// Creación de objeto Gato
let miGato = new Gato('Mishi', 'Felino', 'gatito xd');

console.log(miGato.informacionAdicional()); 

miGato.setSonido('Miau'); 
console.log(miGato.getSonido()); 
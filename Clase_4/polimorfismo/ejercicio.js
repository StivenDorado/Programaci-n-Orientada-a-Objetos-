class Nan{
    constructor(propiedad) {
        this.propiedad = propiedad
    }

    imprimir(){
        if(typeof (this.propiedad) === 'number') {
            return this.propiedad + 2;
        } else {
            return 'Ola Vroo';
        }

    }

}

// Instancias
let objnan = new Nan(7) // intancia de numero 
console.log(objnan.imprimir())

let objnon = new Nan('string') // Intancia de string
console.log(objnon.imprimir())
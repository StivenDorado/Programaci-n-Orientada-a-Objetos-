class Autito {
    constructor(marca1, modelo, color, año) {
        /* una clase se compone de atributos o propiedades y metodos */
        this.marca = marca1;
        this.modelo = modelo;
        this.color = color;
        this.año = año;
    }

    /* a las funciones se les llama metodos */
    arrancar() {
        console.log(this.marca)
    }

    detener() {
        console.log(this.color)

    }
}


 let miAutito = new Autito ('Lambarghambar', 'asaltacunas', 'negro de ratero', 123293 )

 miAutito.arrancar()

 /* Ejemplo:  */
 let miAutito1 = new Autito ('Ferrarirri', 'robaniñas', 'rojo sangre', 854243 )
 
 miAutito1.arrancar()

 /* Crear la clase persona donde tiene numero de documento, nombre edad, apellido. metodo saludo que devuelva 5 instancias de metodo  */

 class Persona {
    constructor (numDoc, nombre, apellido, edad) {
        this.numDoc = numDoc;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludo() {
        console.log(`Hola ${this.nombre}`)
    }
 }

 let persona1 = new Persona("12345678", "Juan", "Perez", 30);
 let persona2 = new Persona("87654321", "María", "Gomez", 25);
 let persona3 = new Persona("56781234", "Carlos", "Lopez", 28);
 let persona4 = new Persona("43218765", "Ana", "Martinez", 35);

 let Personas = [] 
    Personas.push(persona1, persona2, persona3, persona4 )

Personas.forEach((Personas) => {
    Personas.saludo()
})


class Autor{
    constructor(nombre, doc) {
        this.nombre = nombre;
        this.documento = doc;
    }
    
    mostrarDatos() {
        return `Nombre: ${this.nombre}, Documento: ${this.documento}`
    }
}

class Libro{
    constructor(title, codigoL) {
        this.titulo = title;
        this.codigoLibro = codigoL;
    }

    mostrarLibro() {
        return `Título: ${this.titulo}, Código: ${this.codigoLibro}`
    } 
}

class Escribe{
    constructor(objautor, objlibro) {
        this.autor = objautor;
        this.libro = objlibro
    }

    mostrarDatos() {
        return `Autor: ${this.autor.nombre}, Libro: ${this.libro.titulo}`
    }
}

// Instancias
let autor1 = new Autor('Gabriel Garcia Marquez', '123');
let autor2 = new Autor('Mario venedeti', '1234');

let libro1 = new Libro('cien años de estar solito', '000');
let libro2 = new Libro('El amor en los tiempos del cólera');

let escribe1 = new Escribe(autor1, libro1);
console.log(escribe1.mostrarDatos())
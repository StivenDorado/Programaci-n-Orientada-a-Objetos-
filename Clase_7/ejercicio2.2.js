class Autor {
    constructor(nombre, doc) {
        this.nombre = nombre;
        this.documento = doc;
        this.libros = [];
    }
    
    agregarLibro(libro) {
        this.libros.push(libro);
    }

    mostrarLibros() {
        return this.libros.map(libro => libro.titulo).join(", ");
    }

    mostrarDatos() {
        return `Autor: ${this.nombre}\nLibros: ${this.mostrarLibros()}`;
    }
}

class Libro {
    constructor(title, codigoL) {
        this.titulo = title;
        this.codigoLibro = codigoL;
        this.autores = [];
    }

    agregarAutor(autor) {
        this.autores.push(autor);
    }

    mostrarAutores() {
        return this.autores.map(autor => autor.nombre).join(", ");
    }

    mostrarDatos() {
        return `Libro: ${this.titulo}\nAutores: ${this.mostrarAutores()}`;
    }
}

// Instancias
let autor1 = new Autor('Gabriel Garcia Marquez', '123');
let autor2 = new Autor('Mario Benedetti', '1234');

let libro1 = new Libro('Cien años de soledad', '000');
let libro2 = new Libro('El amor en los tiempos del cólera', '001');

// Agregar autores a libros
libro1.agregarAutor(autor1);
libro2.agregarAutor(autor1);
libro2.agregarAutor(autor2);

// Agregar libros a autores
autor1.agregarLibro(libro1);
autor1.agregarLibro(libro2);
autor2.agregarLibro(libro2);

// USo de métodos
console.log(libro1.mostrarDatos());
console.log(libro2.mostrarDatos());
console.log(autor1.mostrarDatos());
console.log(autor2.mostrarDatos());

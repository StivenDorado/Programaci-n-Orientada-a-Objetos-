class Autor {
    constructor(nombre, doc) {
        this.nombre = nombre;
        this.documento = doc;
        this.libros = [];
    }
    
    agregarLibro(libro) {
        this.libros.push(libro);
    }

    mostrarDatos() {
        const titulosLibros = this.libros.map(libro => libro.titulo).join(", ");
        return `Nombre: ${this.nombre}, Documento: ${this.documento}, Libros: ${titulosLibros}`;
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

    mostrarLibro() {
        const nombresAutores = this.autores.map(autor => autor.nombre).join(", ");
        return `Título: ${this.titulo}, Código: ${this.codigoLibro}, Autores: ${nombresAutores}`;
    }
}

class Escribe {
    constructor(objautor, objlibro) {
        this.autor = objautor;
        this.libro = objlibro;
        objautor.agregarLibro(objlibro);
        objlibro.agregarAutor(objautor);
    }

    mostrarDatos() {
        return `Autor: ${this.autor.nombre}, Libro: ${this.libro.titulo}`;
    }
}

// Instancias
let autor1 = new Autor('Gabriel Garcia Marquez', '123');
let autor2 = new Autor('Mario Benedetti', '1234');

let libro1 = new Libro('Cien años de soledad', '000');
let libro2 = new Libro('El amor en los tiempos del cólera', '001');

// Relacionar autores y libros
let escribe1 = new Escribe(autor1, libro1);
let escribe2 = new Escribe(autor1, libro2);
let escribe3 = new Escribe(autor2, libro2);

// Mostrar datos
console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());
console.log(autor1.mostrarDatos());
console.log(autor2.mostrarDatos());

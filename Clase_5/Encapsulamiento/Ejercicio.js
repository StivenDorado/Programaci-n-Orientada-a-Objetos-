// Implementar una clase Comic con su subclase Autor utilizando los métodos y propiedades
// Comic: titulo, precio, stock privadas
// Métodos: validar cantidad, agregar stock, vender, obtener detalles (todos privados)
// Autor: nombreAutor, biografia (privadas y públicas)
// Métodos: obtenerInformacion (público)

class Comic {
    #titulo;
    #precio;
    #stock;

    constructor(titulo, precio, stock) {
        this.#titulo = titulo;
        this.#precio = precio;
        this.#stock = stock;
    }

    #validarCantidad(cantidad) {
        return cantidad > 0;
    }

    agregarStock(cantidad) {
        if (this.#validarCantidad(cantidad)) {
            this.#stock += cantidad;
            console.log(`Se agregaron ${cantidad} unidades al stock.`);
        } else {
            console.log('La cantidad ingresada no es válida.');
        }
    }

    vender(cantidad) {
        if (this.#validarCantidad(cantidad) && cantidad <= this.#stock) {
            this.#stock -= cantidad;
            console.log(`Se vendieron ${cantidad} unidades.`);
        } else {
            console.log('La cantidad vendida no es válida o supera el stock disponible.');
        }
    }

    obtenerDetalles() {
        return `Titulo: ${this.#titulo}, Precio: ${this.#precio}, Stock: ${this.#stock}`;
    }

    mostrarInformacion() {
        console.log(this.obtenerDetalles());
    }
}

class Autor {
    #nombreAutor;
    _biografia;

    constructor(nombreAutor, biografia) {
        this.#nombreAutor = nombreAutor;
        this._biografia = biografia;
    }

    obtenerInformacion() {
        return `Nombre Autor: ${this.#nombreAutor}, Biografía: ${this._biografia}`;
    }

    mostrarInformacion() {
        console.log(this.obtenerInformacion());
    }
}

// Instancia de Comic
let objComic = new Comic('UNORDINARY', 25000, 6);
objComic.mostrarInformacion(); 

// Agregar stock y vender
objComic.agregarStock(4);
objComic.vender(2);
objComic.mostrarInformacion(); 

// Instancia de Autor
let objAutor = new Autor('Yaongyi', 'Autor del webtoon UNORDINARY');
objAutor.mostrarInformacion();

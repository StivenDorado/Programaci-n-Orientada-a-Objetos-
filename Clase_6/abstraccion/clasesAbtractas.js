// Clases concretas, las que si se pueden instanciar
// Clases abstractas; las que no se pueden instanciar, si pueden ser heredadas ya que son como un plano en blanco sobre el cual trabajar

class Electronico{
    constructor(marca, modelo) { // Clases abstractas; las que no se pueden instanciar
        this.marca = marca;
        this.modelo = modelo;

        // Al usar el if agregamos el error ya que al ser  una clase abstracta no es pocible tener instancias en ella
        if(this.constructor===Electronico) {
            throw new Error("No se puede poner instancias en una clase abstracta");
        }
    }

    // Metodo abstracto: fuerza el error: se los puede llamar pero su resultado sera el error generado
    informacionElectronico() {
        console.log(`La Marca es ${this.marca} el modelo es ${this.modelo}`)
    }

    // Metodo abstracto: fuerza el error
    stockElectronico() {
        throw new Error("el Stock de electronico debe ser implementado en la clase hija")
    }
}

class Tv extends Electronico{
    constructor(marca, modelo, tamaño) {
        super(marca, modelo);
        this.tamaño = tamaño;
    }

    informacionTv() {
        console.log(`La Marca es ${this.marca} El modelo es ${this.modelo} Sistema Operativo ${this.tamaño}`)
    }
}

class PC extends Electronico{
    constructor(marca, modelo, sistemaOp) {
        super(marca, modelo);
        this.sistemaOp = sistemaOp;
    }
}

// Instancias 
/* let ObjEle = new Electronico('Samsumg', 829);
ObjEle.informacionElectronico(); */
let Samsumg = new Tv('Samsumg', 2022, 'Harmonie')
Samsumg.informacionTv();

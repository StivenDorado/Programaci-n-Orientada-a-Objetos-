// Clase Frutas Ej
class Manzana { 
    constructor (color, sabor, textura, valor){
    this.color = color;
    this.sabor = sabor;
    this.textura = textura;
    this.valor = valor;
    }

    
    // Metodo set (retornar) y get (Guardar) para UbicacionInicial
    setColor(nuevoColor) {
        this.color = nuevoColor;
    }
    getColor() {
        return this.color;
    }


    // Metodo set (retornar) y get (Guardar) para UbicacionInicial
    setSabor(nuevoSabor) {
        this.sabor = nuevoSabor;
    }
    getSabor() {
        return this.sabor;
    }


    // Metodo set (retornar) y get (Guardar) para UbicacionInicial
    setTextura(nuevaTextura) {
        this.textura = nuevaTextura;
    }
    getTextura() {
        return this.textura;
    }


    // Metodo set (retornar) y get (Guardar) para UbicacionInicial
    setValor(nuevoValor) {
        this.valor = nuevoValor;
    }
    getValor() {
        return this.valor;
    }
}

    //Instancias
    let manzana = new Manzana('rojo', 'dulce', 'crispy', 1500);
      // Mostrar unicacionInicial actual
      console.log(manzana.getTextura());

      // Asignar un valor por medio del metodo setUbicacionInicial
      manzana.getTextura = ('rac');
      // Mostrar
      console.log(manzana.getTextura());
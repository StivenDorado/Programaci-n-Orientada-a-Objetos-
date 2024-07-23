// Clase 
 class Ruta {
    constructor(ubicaionInicial, ubicacionFinal, distancia, ){
        this.ubicaionInicial = ubicaionInicial;
        this.ubicacionFinal = ubicacionFinal;
        this.distancia = distancia;
    }

    // Metodo set (retornar) y get (Guardar) para UbicacionInicial
    // Metodo set (retornar) y get (Guardar) se usan para cambiar los datos y haer un buen uso de los parametros
    setUbicacionInicial(nuevaUbicaionIni) {
        this.ubicaionInicial =  nuevaUbicaionIni;
    }
    getUbicacionInicial() {
        return this.ubicaionInicial;
    }


    // Metodo set y get para UbicacionFinal
    setUbicacionFinal(nuevaUbicaionFin) {
        this.ubicacionFinal =  nuevaUbicaionFin;
    }
    getUbicacionFinal() {
        return this.ubicacionFinal
    }


    // Metodo set y get para Distancia
    setDistancia(dis) {
        this.distancia = dis;
    }

    getDistancia() {
        return this.distancia;
    }
 }


    // Objeto 
    let ruta = new Ruta('abc', 'cdf', '6km');
    // Mostrar unicacionInicial actual
    console.log(ruta.getUbicacionInicial());

        // Asignar un valor por medio del metodo setUbicacionInicial
        ruta.setUbicacionInicial = ('bg');
        // Mostrar
        console.log(ruta.getUbicacionInicial());

        // Asignar un valor por medio del metodo setUbicacionFinal
        ruta.setUbicacionFinal = ('dr');
        // Mostrar
        console.log(ruta.getUbicacionFinal());

        // Asignar un valor por medio del metodo setDistancia
        ruta.setDistancia = ('13km');
        // Mostrar
        console.log(ruta.setDistancia());
    

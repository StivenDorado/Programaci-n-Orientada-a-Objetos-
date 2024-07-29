class Silos {
    constructor(tipoGrano, cantidad, cliente, diasAlmacenamiento, mesInicio) {
        this.tipoGrano = tipoGrano;
        this.cantidad = cantidad;
        this.cliente = cliente;
        this.diasAlmacenamiento = diasAlmacenamiento;
        this.mesInicio = mesInicio;
        this.costoBasicoPorDia = 3000;
    }
    
    calcularPrecio() {
        let adicional = (this.mesInicio >= 1 && this.mesInicio <= 6) ? 15000 : 25000;
        let costoTotal = this.diasAlmacenamiento * this.costoBasicoPorDia + adicional;
        console.log(`El precio de almacenamiento es: ${costoTotal} pesos`);
        return costoTotal;
    }
}

// Ejemplo
const silo = new Silos("trigo", 1000, "Johansit0", 30, 5);
const precio = silo.calcularPrecio();
console.log(`Precio total: ${precio} pesos`);

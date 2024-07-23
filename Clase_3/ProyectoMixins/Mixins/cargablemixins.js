const CargebleMixin = {
    cargarMercancia(capacidadCarga) {
        console.log(this.capacidadCarga);
    },

    descargarMercancia() {
        console.log('Se esta descargando la Mercancia')
    }
}
 export default CargebleMixin;
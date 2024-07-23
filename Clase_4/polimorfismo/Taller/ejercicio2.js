class Panaderia {
    constructor(tipoPan, insumoPrincipal, cantidadProducida, costoProduccion) {
      this.tipoPan = tipoPan;
      this.insumoPrincipal = insumoPrincipal;
      this.cantidadProducida = cantidadProducida;
      this.costoProduccion = costoProduccion;
    }
  
    // Getters y Setters
    getTipoPan() {
      return this.tipoPan;
    }
  
    setTipoPan(tipoPan) {
      this.tipoPan = tipoPan;
    }
  
    getInsumoPrincipal() {
      return this.insumoPrincipal;
    }
  
    setInsumoPrincipal(insumoPrincipal) {
      this.insumoPrincipal = insumoPrincipal;
    }
  
    getCantidadProducida() {
      return this.cantidadProducida;
    }
  
    setCantidadProducida(cantidadProducida) {
      this.cantidadProducida = cantidadProducida;
    }
  
    getCostoProduccion() {
      return this.costoProduccion;
    }
  
    setCostoProduccion(costoProduccion) {
      this.costoProduccion = costoProduccion;
    }
  
    
    mensajeGenerico() {
      return "Este es un mensaje genérico para la panadería.";
    }
  }
  
 
  class TipoPan extends Panaderia {
    constructor(tipoPan, insumoPrincipal, cantidadProducida, costoProduccion, caracteristicaEspecial) {
      super(tipoPan, insumoPrincipal, cantidadProducida, costoProduccion);
      this.caracteristicaEspecial = caracteristicaEspecial;
    }
  
    mensajeEspecifico() {
      return `Este es un mensaje específico para el tipo de pan ${this.tipoPan}.`;
    }
  }
  
 // Ejemplo 
  let pan1 = new TipoPan("Integral", "Harina integral", 100, 200, "Con semillas de chía");
  console.log(pan1.getTipoPan()); 
  console.log(pan1.getInsumoPrincipal()); 
  console.log(pan1.mensajeGenerico()); 
  console.log(pan1.mensajeEspecifico()); 
  
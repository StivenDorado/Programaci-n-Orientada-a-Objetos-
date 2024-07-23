class CuentaBacaria {
    _NCuenta //Publico 
    #clave //Privado
    _nombreroPropietario //Publico 
    _fechaExpe //Publico 
    #cantDinero //Privado



    constructor(cuenta, clave, nombre, fecha, cantiDinero,) {
        this._NCuenta = cuenta;
        this.#clave = clave;
        this._nombreroPropietario = nombre;
        this.fechaExpe = fecha;
        this.#cantDinero = cantiDinero;
    }

    depositar(monto) {
        return this.#cantDinero + monto
    }

    retirar(monto) {
        return this.#cantDinero - monto
    }

    #saldo() {
        return this.#cantDinero
    }

    mostrarInformacion() {
        console.log(this._NCuenta)
    }
    
    saldototal() {
        return this.#saldo()
    }
}

let objtCB = new CuentaBacaria('12', '626', ' tini el bromas', '17-23-2999', 2000000);
objtCB.mostrarInformacion();
objtCB._NCuenta =  '2136123'
objtCB.mostrarInformacion();
console.log(objtCB.depositar(2000))
console.log(objtCB.retirar(1000));
console.log(objtCB.saldototal())


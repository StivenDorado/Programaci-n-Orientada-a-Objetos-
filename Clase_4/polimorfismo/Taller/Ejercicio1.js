class Herramientas {
    estado() {
        console.log('Las herramientas son necesarias para tareas de mantenimiento')
    }
}

class Hijas extends Herramientas {

    estado1() {
        console.log('Las herramientas mecánicas son básicas y manejables')
    }

    estado2() {
        console.log('Las herramientas eléctricas o electrónicas son de alta precisión')
    }
}

// Ejemplo 
let objmensaje = new Herramientas()
objmensaje.estado()

let objmensaje2 = new Hijas()
objmensaje2.estado1()

let objmensaje3 = new Hijas()
objmensaje3.estado2()
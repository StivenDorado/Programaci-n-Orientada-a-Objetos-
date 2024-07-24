class AgendaContacto{
    constructor(nombre, apellido, telefono, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
}

class Contacto{
    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto)
    }
    editarContacto() {

    }

    eliminarContacto() {

    }

    mostrarContactos() {

    }
}

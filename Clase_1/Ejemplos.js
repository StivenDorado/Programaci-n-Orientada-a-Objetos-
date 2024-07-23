 let Empleado = {
    num:2345, nombre: 'Daniel', apellido: 'ramirez'
 }

 console.log(Empleado.nombre);

 Empleado.nombre = 'Pedro'
 
 console.log(Empleado.nombre);


 /* objeto con metodos */
 let Libro = { 
    titulo: 'Cancion de hielo y fuego',
    autor:'George  R.R. Martin',
    año:1999,
    descripcion() {
        console.log(this.titulo)
    },

    añoLibro() {
        console.log(this.año)
    }
    
 }

 Libro.descripcion()
 Libro.añoLibro()
  
 /* objeto con array */
 deporte = {
    conbalon:['futbol', 'baloncesto', 'voleibol', 'futbol americano'],
    sinbalon:['tenis', 'atletismo', 'boxeo']
 }

 console.log(deporte.conbalon[2])

 /* agregar un caracteristica a al array */
 deporte.sinbalon.push('natacion');

 console.log(deporte.sinbalon);


 /*  */
  let personas = {
    nombre: 'johan',
    edad: 8,
    
    estudios: {
        escuela: 'primaria',
        educacion: 'tecnologo Sena'
    },

    profesion: {
        infiel: 'con su novia'
    },

    tieneProfesion () {
        console.log(this.profesion);
    },
    tieneEstudios () {
        console.log(this.estudios);
    }

 }
 
 personas.tieneProfesion();
 personas.tieneEstudios();


 
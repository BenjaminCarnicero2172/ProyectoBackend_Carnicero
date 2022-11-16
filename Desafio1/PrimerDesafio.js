class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    };

    addMascota(nombreMascota) {
        (this.mascotas).push(nombreMascota);
    };

    countMascotas() {
        return (this.mascotas).length
    };

    addBook(Libro, autor) {
        (this.libros).push({nombre: Libro, autor: autor});
    };

    getBookNames() {
        let nombreLibros = [];
        (this.libros).forEach( libro => {
            nombreLibros.push(libro.nombre);
        });
        return nombreLibros;
    };
};

const nombre = 'Benjamin';
const apellido = 'Carnicero';
const libros = [{nombre: 'El señor de las moscas',autor: 'William Golding'},{nombre: 'Fundacion',autor: 'Isaac Asimov'}];
const mascotas = ['Perro','Gallina','Elefante'];

const usuario = new Usuario(nombre,apellido,libros,mascotas);
console.log('Nombre completo del usuario:')
console.log(usuario.getFullName()); 
console.log('Mascotas que el usuario tiene inicialmente: Perro, Gallina, Elefante')
console.log(usuario.countMascotas()); 
console.log('Se agrega un nuevo animal: Cocodrilo')
usuario.addMascota('Cocodrilo');
console.log('Nueva cantidad de mascotas del usuario:');
console.log(usuario.countMascotas());
console.log('Nombres de los libros:');
console.log(usuario.getBookNames());
console.log('El usuario agrega un nuevo libro')
usuario.addBook('El Principito',' Antoine de Saint-Exupéry');
console.log('Nombre de los libros tras agregar uno nuevo:');
console.log(usuario.getBookNames());
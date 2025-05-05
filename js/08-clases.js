//persona: nombre, apellido, dni, mail, edad, estado
//alumno: legajo, curso, estado, [], asistencia

class Persona {
  //propiedades y metodos
  constructor(nombre, apellido, dni, mail, edad, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.mail = mail;
    this.edad = edad;
    //propiedad por defecto
    this.estado = true;
  }
  // propiedades computadas
  // get y set
  get nombreCompleto() {
    return this.apellido;
  }
  //metodos
  mostrarDatos() {
    document.writeln(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Apellido: ${this.apellido}</li>
        <li>DNI: ${this.dni}</li>
        <li>Mail: ${this.mail}</li>
        <li>Edad: ${this.edad}</li>
        <li>Estado: ${this.estado}</li>
        </ul>`);
  }
}

class Alumno extends Persona {}

//nombreObjeto.propiedad
//cuando utilizamos a la clase: crear un objeto o instancia

const nacho = new Persona(
  "Ignacio",
  "Gonzalez",
  "12345678",
  "nacho@gmail.com",
  25,
  true
);
console.log(nacho.nombreCompleto);
nacho.mostrarDatos();

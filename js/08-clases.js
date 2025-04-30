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

  // get y set

  //metodos
}

//nombreObjeto.propiedad
//cuando utilizamos a la clase: crear un objeto o instancia

const nacho = new Persona('Ignacio', 'Gonzalez', '12345678', 'nacho@gmail.com', 25, true);
console.log(nacho);

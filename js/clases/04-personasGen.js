// - Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      document.writeln(
        "Esta persona pertenece a la generación Silent Generation, y sus rasgos característicos son: Austeridad y disciplina."
      );
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      document.writeln(
        "Esta persona pertenece a la generación Baby Boom, y sus rasgos característicos son: Ambición y trabajo duro"
      );
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      document.writeln(
        "Esta persona pertenece a la generación Generación X, y sus rasgos característicos son: Adaptabilidad y escepticismo."
      );
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      document.writeln(
        "Esta persona pertenece a la generación Millenials(Y), y sus rasgos característicos son: Tecnologia e inmediatez."
      );
    } else {
      document.writeln(
        "Esta persona pertenece a la generación Generación Z, y sus rasgos característicos son: Nativos digitales y conexión constante."
      );
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.writeln("Es mayor de edad.");
    }
  }

  generarDNI() {
    const dni = Math.floor(Math.random() * 100000000);
    this.dni = dni;
    document.writeln("El DNI es: " + this.dni);
  }

  mostrarDatos() {
    document.writeln(
      `<ul> 
      <li> Nombre: ${this.nombre}</li>
      <li> Edad: ${this.edad}</li>
      <li> DNI: ${this.dni}</li>
      <li> Sexo: ${this.sexo}</li>
      <li> Peso: ${this.peso}</li>
      <li> Altura: ${this.altura}</li>
      <li> Año de nacimiento: ${this.anioNacimiento}</li>
      </ul>`
    );
  }
}

const persona1 = new Persona("Joaquin", 25, "H", 70, 1.75, 2002);
const persona2 = new Persona("Maria", 30,"M", 60, 1.65, 1930);
document.writeln(
  `<h3> Los datos de la persona 1 son: </h3>`
);
persona1.mostrarGeneracion();
persona1.generarDNI();
persona1.mostrarDatos();
document.writeln(
  `<h3> Los datos de la persona 2 son: </h3>`
);
persona2.mostrarGeneracion();
persona2.generarDNI();
persona2.mostrarDatos();

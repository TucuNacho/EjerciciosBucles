const persona = {
  nombre: "",
  edad: 0,
  hobbies: ["programar"],

  nuevaPersona: function (nombre, edad) {
    this.nombre = prompt("ingrese el nombre de la nueva persona");
    this.edad = prompt("ingrese la edad de la nueva persona");
    document.writeln(
      `<p>Hola soy ${this.nombre}, tengo ${this.edad} años y mi hobby es ${this.hobbies} </p>`
    );
  },

  agregarHobby: function () {
    let nuevoHobby;
    do {
      nuevoHobby = prompt("ingrese un nuevo hobby");
      if (nuevoHobby) {
        this.hobbies.push(nuevoHobby);
      }
    } while (confirm("¿Desea agregar otro hobby?"));
  },
  mostrarHobby: function () {
    document.writeln("<h2>Hobbies</h2>");
      document.writeln(`<p>${this.hobbies.join(", ")}</p>`);
  },
};

persona.nuevaPersona();
persona.agregarHobby();
persona.mostrarHobby();

//notacion literal - esto uso cuando voy a crear un objeto
const persona = {
  //propiedades o atributos
  //nombre, email, id,
  nombreUser: "Ignacio01",
  nombre: "Ignacio",
  apellido: "Barrojo",
  email: "barrojojoaquin2@gmail.com",
  dni: "44030734",
  id: 23,
  estado: true,

  //metodos
  nombreCompleto: function () {
    document.writeln(`<p> hola soy ${this.nombre}, ${this.apellido} </p>`);
  },
  cambiarEstado: () =>{ 
    document.writeln("cambiando estado... <br>");
  }
};

console.log(persona);
document.writeln(persona + "<br>");

//mostrar propiedades de un objeto

document.writeln(persona.nombreUser);
document.writeln(`<p>El dni del usuario es: ${persona.dni}</p>`);
document.writeln(`<p>El dni del usuario es: ${persona.dnis}</p>`);
document.writeln(`<p>El email del usuario es: ${persona['email']}</p>`);
document.writeln(`<p>El email del usuario es: ${persona['emails']}</p>`);


//modificar propiedades de un objeto

persona.nombreUser = "Ignacio02";
document.writeln(`<p> el nuevo nombre de usuario es: ${persona.nombreUser} </p>`);

//trabajar con los metodos

persona.nombreCompleto()
persona.cambiarEstado()
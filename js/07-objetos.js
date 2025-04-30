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
    document.writeln("hola soy...");
  },
  cambiarEstado: () =>{ 
    document.writeln("cambiando estado...");
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
persona.nombreCompleto()
persona.cambiarEstado()
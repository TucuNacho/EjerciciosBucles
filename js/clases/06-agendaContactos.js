class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class AgendaContactos {
  constructor(maxContactos = 10) {
    this.contactos = [];
    this.maxContactos = maxContactos;
  }

  agregarContacto(contacto) {
    if (this.contactos.length < this.maxContactos) {
      this.contactos.push(contacto);
      console.log(`Contacto ${contacto.nombre} agregado.`);
    } else {
      console.log("No se pueden agregar más contactos. Límite alcanzado.");
    }
  }

  existeContacto(nombre) {
    return this.contactos.some((c) => c.nombre === nombre);
  }

  listarContactos() {
    document.writeln("<h2>Lista de Contactos:</h2>");
    document.writeln("<ul>");
    for (let i = 0; i < this.contactos.length; i++) {
      document.writeln(
        `<li> Nombre: ${this.contactos[i].nombre}, Telefono: ${this.contactos[i].telefono}</li>`
      );
    }
    document.writeln("</ul>");
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      document.writeln(
        `El contacto ${nombre} existe en la agenda. Su número de teléfono es ${contacto.telefono}.`
      );
    } else {
      document.writeln(`El contacto ${nombre} no existe en la agenda.`);
    }
  }

  eliminarContacto(nombre) {
    const BorrarContacto = this.contactos.findIndex((c) => c.nombre === nombre);
    if (BorrarContacto !== -1) {
      this.contactos.splice(BorrarContacto, 1);
      document.writeln(`El contacto ${nombre} ha sido eliminado de la agenda.`);
    } else {
      document.writeln(`El contacto ${nombre} no existe en la agenda.`);
    }
  }

  agendaLLena() {
    if (this.contactos.length >= this.maxContactos) {
      document.writeln(
        "La agenda está llena. No se pueden agregar más contactos."
      );
    }
  }

  agendaLibre() {
    if (this.contactos.length < this.maxContactos) {
      document.writeln(
        `La agenda tiene espacio para ${
          this.maxContactos - this.contactos.length
        } contactos más.`
      );
    }
  }
}

function menuOpciones(agenda) {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Seleccione una opción:\n1. Agregar contacto\n2. Listar contactos\n3. Buscar contacto\n4. Eliminar contacto\n5. ver si la agenda está llena\n6. ver si la agenda tiene espacio\n7. Salir"
      )
    );

    switch (opcion) {
      case 1:
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        if (!agenda.existeContacto(nombre)) {
          alert("El contacto fue agregado correctamente.");
          agenda.agregarContacto(new Contacto(nombre, telefono));
        } else {
            document.writeln(`<p>El contacto ${nombre} ya existe en la agenda.</p>`);
        }
        break;
      case 2:
        agenda.listarContactos();
        break;
      case 3:
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
      case 4:
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        agenda.eliminarContacto(nombreEliminar);
        break;
        case 5:
        agenda.agendaLLena();
        break;
        case 6:
        agenda.agendaLibre();
        break;
      case 7:
        document.writeln("Saliendo del sistema...");
        break;
      default:
        alert("Opción inválida. Por favor, intente nuevamente.");
        break;
    }
  } while (confirm("¿Desea continuar?" ));
}
const miAgenda = new AgendaContactos(5);
menuOpciones(miAgenda);
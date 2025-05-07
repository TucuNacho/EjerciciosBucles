class CuentaBancaria {
  constructor(nombre, apellido, dni, edad, saldo, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.saldo = 0;
    this.estado = true;
  }
  ingresarDinero() {
    do {
      const dinero = parseFloat(prompt("Ingrese el monto a depositar:"));
      if (isNaN(dinero) || dinero <= 0) {
        alert("El monto ingresado no es válido.");
      } else {
        this.saldo += dinero;
      }
    } while (confirm("¿Desea ingresar otro monto?"));
    return this.saldo;
  }

  extraerDinero() {
    let continuar;
    do {
      const extraer = parseFloat(prompt("Ingrese el monto a extraer:"));
      if (isNaN(extraer) || extraer <= 0) {
        alert("El monto ingresado no es válido.");
        continue;
      } else {
        if (extraer > this.saldo) {
          alert("No hay suficiente saldo para realizar la extracción.");
          continue;
        } else {
          this.saldo -= extraer;
          document.writeln(`<p>Se han extraído $${extraer} de la cuenta.</p>`);
          document.writeln(`<p>Saldo actual: $${this.saldo}</p>`);
          continuar = confirm("¿Desea extraer otro monto?");
        }
      }
    } while (continuar);
    return this.saldo;
  }

  informarEstado() {
    if (this.estado) {
      document.writeln(
        `<p>La cuenta de ${this.nombre} ${this.apellido} está activa.</p>`
      );
    } else {
      document.writeln(
        `<p>La cuenta de ${this.nombre} ${this.apellido} está inactiva.</p>`
      );
    }
  }
}

// Crear una instancia de la clase CuentaBancaria
const cuenta1 = new CuentaBancaria(
  "Ignacio",
  "Barrojo",
  "12345678",
  22,
  0,
  true
);

// Mostrar el saldo inicial
document.writeln(`<p>Saldo inicial: $${cuenta1.saldo}</p>`);
// Ingresar dinero
cuenta1.ingresarDinero();
// Mostrar el saldo después de ingresar dinero
document.writeln(`<p>Saldo después de ingresar dinero: $${cuenta1.saldo}</p>`);
// Extraer dinero
cuenta1.extraerDinero();
// Mostrar el saldo después de extraer dinero

document.writeln(`<p>Saldo después de extraer dinero: $${cuenta1.saldo}</p>`);
// Informar el estado de la cuenta
cuenta1.informarEstado();

const auto = {
  marca: "Chevrolet",
  modelo: "Onix",
  anio: 2020,
  color: "Rojo",
  precio: 200000,
  encendido: false,

  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      document.writeln("<p> El auto está encendido. </p>");
    } else {
      document.writeln("<p> El auto ya está encendido. </p>");
    }
  },

  apagado: function () {
    if (this.encendido) {
      this.encendido = false;
      document.writeln("<p> El auto está apagado. </p>");
    } else {
      document.writeln("<p> El auto ya está apagado. </p>");
    }
  },

  estadoActual: function () {
    if (this.encendido) {
      document.writeln("<p> El auto está encendido. </p>");
    } else {
      document.writeln("<p> El auto está apagado. </p>");
    }
    document.writeln(
      `El auto es un ${this.marca} ${this.modelo} del año ${this.anio} de color ${this.color} y su precio es $${this.precio}.`
    );
  },
};

auto.encender();
auto.apagado();

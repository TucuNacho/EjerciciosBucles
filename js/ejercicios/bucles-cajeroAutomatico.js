let saldo = 10000;

do {
  const opcion = parseInt(
    prompt(
      "Seleccione una opción: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir."
    )
  );
  switch (opcion) {
    case 1:
    case "1":
    case "saldo":
      document.writeln("El saldo es $" + saldo);
      console.log("El saldo es $" + saldo);
      break;
    case 2:
      // mostrar mensaje para que agregue la cantidad de dinero a depositar
      const deposito = Number(prompt("Ingresa el monto a depositar"));
      console.log("depositaste:" + deposito);
      // actualizar el saldo y mostrarlo
      saldo = saldo + deposito; // saldo += deposito;
      // document.writeln('Depositaste $' + deposito + ', tu saldo actual es $'+saldo);
      document.writeln(
        `Depositaste $${deposito}, tu saldo actual es $${saldo}`
      );
      console.log(`Depositaste $${deposito}, tu saldo actual es $${saldo}`);
      break;
    case 3:
      //mostrar un mensaje que diga cuanto quiero extraer
      const extraccion = Number(prompt("Ingresa el monto a extraer"));
      console.log("Quiere extraer" + extraccion);
      //preguntar si el monto a extraer no supera el saldo
      if (extraccion <= saldo) {
        //hago la extraccion y mostrar un cartel al usuario
        saldo = saldo - extraccion; // saldo -=extraccion
        document.writeln(
          `Monto a extraer -$${extraccion}, tu saldo actual es $${saldo}`
        );
        console.log(
          `Monto a extraer -$${extraccion}, tu saldo actual es $${saldo}`
        );
      } else {
        document.writeln(`Saldo insuficiente`);
        console.log(`Saldo insuficiente`);
      }
      break;
    case 4:
      document.writeln("Cerrando el sistema...");
      console.log("Cerrando el sistema...");
      break;
    default:
      document.writeln("❌ Ingresaste una opción invalida");
      console.log("❌ Ingresaste una opción invalida");
  }
} while (confirm("¿Deseas realizar otra operación?"));

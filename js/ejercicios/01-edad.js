//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

do {
  const edad = parseInt(prompt("Ingrese su edad: "));
  if (isNaN(edad)) {
    document.writeln("Edad ingresada no válida.");
  } else if (edad >= 18) {
    document.writeln(
      `Eres mayor de edad, tienes ${edad} años, puedes conducir👍. <br>`
    );
  } else {
    document.writeln(
      `Eres menor de edad, tienes ${edad} años, no puedes conducir👎. <br>`
    );
  }
} while (confirm("¿Desea ingresar otra edad?"));

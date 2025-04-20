//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let resultado = "";
let primera = true;

do {
  const cadenas = prompt(
    "Ingrese una cadena de texto (o 'cancelar' para salir):"
  );
  if (cadenas !== null) {
    if (primera) {
      resultado += cadenas;
      primera = false;
    } else {
      resultado += "-" + cadenas;
    }
  }
} while (confirm("¿Desea ingresar otra cadena?"));

document.writeln("Cadenas ingresadas: " + resultado);

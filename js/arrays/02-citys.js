const ciudades = [];
let ciudad, paises;

do {
  ciudad = prompt("Ingrese el nombre de una ciudad (o cancele para terminar):");
  if (ciudad) {
    paises = prompt("Ingrese el nombre del pais de esa ciudad:");
    ciudades.push(`${ciudad}, ${paises}`);
  } else {
    break;
  }
} while (confirm("¿Desea ingresar otra ciudad?"));

document.writeln("<ul>");
document.writeln("</ul>");
document.writeln("<br>Cantidad de elementos en el array: " + ciudades.length);

if (ciudades.length > 0) {
  document.writeln("<h3>ítems de las posicion primera y última:</h3>");
  document.writeln("<ul>");
  document.writeln(`<li> Primera: ${ciudades[0]} </li>`);
}

if (ciudades.length > 2) {
  document.writeln(`<li> Tercera: ${ciudades[2]}</li>`);
}

if (ciudades.length > 0) {
  document.writeln(`<li> Última: ${ciudades[ciudades.length - 1]}</li>`);
}
document.writeln("</ul>");

ciudades.push("París, Francia");

if (ciudades.length > 1) {
  document.writeln("<h3>Ciudad en segunda posición:</h3> " + ciudades[1]);
}

if (ciudades.length >= 2) {
  ciudades[1] = "Barcelona, España";
  document.writeln(
    "<h3>Ciudad en segunda posición cambiada por Barcelona:</h3> " + ciudades[1]
  );
}

document.writeln("<h3>Arreglo de ciudades:</h3>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`);
}
document.writeln("</ul>");

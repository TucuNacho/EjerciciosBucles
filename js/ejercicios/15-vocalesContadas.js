// Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Introduce un texto: ");
let contador = 0;
let vocalesEncontradas = ""

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contador++;
        vocalesEncontradas += letra + " ";
    }
}

document.writeln("El texto tiene " + contador + " vocales.");
document.writeln("Las vocales son: " + vocalesEncontradas);

//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

let numero = "";

do {
  numero = parseInt(prompt("Introduce un número menor o igual a 50: "));
} while (isNaN(numero) || numero > 50 || numero <= 0);

for (let i = numero; i >= 1; i--) {
    let piramide = "";
    for (let j = i; j >= 1; j--) {
        piramide += j + " ";
    }
    document.writeln(piramide + "<br>");
}
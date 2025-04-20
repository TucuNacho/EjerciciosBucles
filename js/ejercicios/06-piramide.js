//Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma

let piramide = "";
let numero = 1;

do {
    piramide += numero + " ";
    document.writeln(piramide + "<br>");
    console.log(piramide + "<br>");
} while (confirm("¿Quieres continuar?") && numero++ < 30);
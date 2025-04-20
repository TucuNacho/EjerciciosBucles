//Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
let dni;

do {
    dni = parseInt(prompt("Introduce el número de DNI (sin letra): "));
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("Número de DNI no válido. Debe ser un número entre 0 y 99999999.");
    }else {
        let letra = dni % 23;
        document.writeln("El número de DNI es: " + dni + "<br>");
        document.writeln("La letra del DNI es: " + letras[letra] + "<br>");
    }
} while (condition);
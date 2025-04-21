//Realiza un script que pida número de filas y columnas y escriba una tabla. 
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
// Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Introduce el número de filas:"));
let columnas = parseInt(prompt("Introduce el número de columnas:"));
let tabla = "<table border='1'>";
let numero = filas * columnas;

for (let i= 0; i < filas; i++){
    tabla += "<tr>";
    for (let j = 0; j < columnas; j++){
        tabla += "<td>" + numero + "</td>";
        numero--;
    }
    tabla += "</tr>";
}

tabla += "</table>";
document.writeln(tabla);
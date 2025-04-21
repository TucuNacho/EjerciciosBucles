// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 


const numero = parseInt(prompt("Introduce un número (no mayor de 50): "));
if (isNaN(numero || numero <= 0 || numero > 50)) {
    console.log("El número debe ser un número entero positivo y no mayor de 50.");
}
else {
    for (let i = 1; i <= numero; i++) {
        let piramide = " ";
        for (let j = 1; j <= i; j++){
            piramide += j + " ";
        }
        document.writeln(piramide + "<br>");
    }
}
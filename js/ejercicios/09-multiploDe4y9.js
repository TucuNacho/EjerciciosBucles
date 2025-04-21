//Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

let i = 1;
let contador = 0;
while (i <= 500) {
    if (i % 4 === 0 && i % 9 === 0) {
        document.writeln(i + " es múltiplo de 4 y de 9 <br>");
    } else if (i % 4 === 0) {
        document.writeln(i + " es múltiplo de 4 <br>");
    } else if (i % 9 === 0) {
        document.writeln(i + " es múltiplo de 9 <br>");
    } else {
        document.writeln(i + "<br>");
    }
    i++;
    contador++;
    if (contador % 5 === 0) {
        document.writeln ("<hr>" );
    }
}
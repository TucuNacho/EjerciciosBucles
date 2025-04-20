//Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let numero;
let continuar = true;

do {
    numero = parseInt(prompt("Introduce un número:"));
    if (isNaN(numero)){
        alert("No es un número valido, por favor introduce un número.")
    }else{
        suma += numero;
    }
}while (confirm("¿Quieres seguir introduciendo números?"));
document.writeln("La suma total es: " + suma);
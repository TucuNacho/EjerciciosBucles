//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
//usar Math()

const nombre1 = prompt("Introduce el primer nombre:");
const edad1 = parseInt(prompt("Introduce la edad de " + nombre1 + ": "));
const nombre2 = prompt("Introduce el segundo nombre:");
const edad2 = parseInt(prompt("Introduce la edad de " + nombre2 + ": "));
const nombre3 = prompt("Introduce el tercer nombre:");
const edad3 = parseInt(prompt("Introduce la edad de " + nombre3 + ": "));

const mayor = Math.max(edad1, edad2, edad3);
let nombreMayor = "";
if (mayor === edad1) {
  nombreMayor = nombre1;
} else if (mayor === edad2) nombreMayor = nombre2;
else if (mayor === edad3) {
  nombreMayor = nombre3;
}

document.writeln("El mayor es " + nombreMayor + " con " + mayor + " años.");
// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const texto = prompt("Introduce un texto:");

for (let i = 0; i < texto.length; i++) {
  const letra = texto.charAt(i).toUpperCase();
  if (
    letra === "A" ||
    letra === "E" ||
    letra === "I" ||
    letra === "O" ||
    letra === "U"
) {
    document.writeln(`El texto introducido es: ${texto} <br>`);
    document.writeln(`La primera vocal es: ${letra} <br>`);
    document.writeln(`La posición de la primera vocal es ${i}`);
    break;
}
}

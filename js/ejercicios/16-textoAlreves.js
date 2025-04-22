//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh

const texto = prompt("otxet nu ecudortnI: ");
let textoAlreves = "";

for (let i = texto.length -1; i >= 0; i--){
    textoAlreves += texto[i];
}

document.writeln("El texto al revés es: " + textoAlreves);
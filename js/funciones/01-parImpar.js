const numero = prompt("Introduce un número: ");
const parImpar = (numero)=> {
    if (numero % 2 === 0) {
        return "El número es par";
    }else{
        return "El número es impar";
    }

};

parImpar()
document.writeln(parImpar(numero))
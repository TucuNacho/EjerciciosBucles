// Sintasis: funcion tradicional, expresion de funcion, funcion flecha

//funciones sin parametros
function saludar() {
  // todas las linead de codigo que quiero hacer para saludar
  document.writeln("Hola Mundo🫎 <br>");
}

//funciones con parametro
function sumar(numero1, numero2) {
    const resultado = numero1 + numero2;
    document.writeln("La suma es: " + resultado + "<br>");
}

//funciones que retornan valor

//invocar o llamar a una funcion
saludar(); //llamo a la funcion saludar

const numero1 = parseInt(prompt("Ingrese el primer numero: "));
const numero2 = parseInt(prompt("Ingrese el segundo numero: "));
sumar(numero1, numero2);
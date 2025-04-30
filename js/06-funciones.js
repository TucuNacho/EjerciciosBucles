//Sintaxis: funcion tradicinal, expresion de funcion, arrow functions

//funciones sin parametros
// function saludar(){
//     //todas las lineas de codigo que quiero hacer para saludar
//     document.writeln('<p>Hola mundo 🌎</p>')
// }

// Expresion de funcion
const saludar = function (){
<<<<<<< HEAD
  //todas las lineas de codigo que quiero hacer para saludar
  document.writeln('<p>Hola mundo 🌎</p>')
=======
    //todas las lineas de codigo que quiero hacer para saludar
    document.writeln('<p>Hola mundo 🌎</p>')
>>>>>>> upstream/dev
}

//funciones con parametros
function sumar(numero1,numero2){
<<<<<<< HEAD
  const resultado = numero1 + numero2
  document.writeln(`<p>Resultado de la suma: ${resultado}</p>`)
=======
    const resultado = numero1 + numero2
    document.writeln(`<p>Resultado de la suma: ${resultado}</p>`)
>>>>>>> upstream/dev
}

//funciones que retornan un valor
// function multiplicar(numero1, numero2){
//     const resultado = numero1 * numero2
//     console.log(resultado)
//     return resultado
// }

const multiplicar = (numero1, numero2) => numero1 * numero2

//invocar o llamar a una funcion
saludar();

const num1 = parseInt(prompt('ingresa un numero'))
const num2 = parseInt(prompt('ingresa un segundo'))

sumar(num1,num2);
sumar(num1, 10)

// const resultado = multiplicar(num1, num2)
// document.writeln('El resultado de la multiplicacion es:'+ resultado)
<<<<<<< HEAD
document.writeln('El resultado de la multiplicacion es:'+ multiplicar(num1, num2))
=======
document.writeln('El resultado de la multiplicacion es:'+ multiplicar(num1, num2))

>>>>>>> upstream/dev

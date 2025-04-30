const tablas = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
let resultado = "";

const tablaMultiplicar = (num) => {
    for (let i = 1; i <= 10; i++) {
            resultado += `${num} x ${i} = ${num * i}\n`;
    }
}

const mostrarTabla = tablaMultiplicar(tablas);
document.writeln("<h2>Tabla de multiplicar del " + tablas + "</h2>");
document.writeln("<pre>" + resultado + "</pre");
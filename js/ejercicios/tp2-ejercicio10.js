//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingresa un número de filas'))
const columnas = parseInt(prompt('Ingresa un número de columnas'))

document.writeln(`<table><tbody>`)

for(let indiceFilas =1; indiceFilas <=filas; indiceFilas++){
    document.writeln(`
            <tr>
                <td>35</td>
            </tr>
    `)
}

document.writeln(` </tbody></table>`)
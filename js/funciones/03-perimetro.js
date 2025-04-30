const ladoRectangulo = parseInt(prompt("Ingrese el lado del rectángulo: "));
const baseRectangulo = parseInt(prompt("Ingrese la base del rectángulo: "));

const perimetro=(ladoRectangulo, baseRectangulo) => {
    if (isNaN(ladoRectangulo) || isNaN(baseRectangulo)) {
        return "Error: Ingrese un número válido.";
    }else{
        return (ladoRectangulo + baseRectangulo) * 2;
    }
};
const resultadoPerimetro=perimetro(ladoRectangulo, baseRectangulo);
document.writeln(`El perímetro del rectángulo es: ${resultadoPerimetro}`);
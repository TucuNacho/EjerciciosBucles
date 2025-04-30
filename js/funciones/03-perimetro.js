const ladoRectangulo = parseInt(prompt("Ingrese el lado del rectángulo: "));
const baseRectangulo = parseInt(prompt("Ingrese la base del rectángulo: "));

const perimetro=(ladoRectangulo, baseRectangulo) => {
    return (ladoRectangulo + baseRectangulo) * 2;
};
const resultadoPerimetro=perimetro(ladoRectangulo, baseRectangulo);
document.writeln(`El perímetro del rectángulo es: ${perimetro(ladoRectangulo, baseRectangulo)}`);
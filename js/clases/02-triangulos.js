// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Triangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  MetodocalcularArea() {
    return (this.base * this.altura) / 2;
  }

  MetodocalcularPerimetro() {
    return this.base * 3;
  }
   setbase(nuevaBase) {
    if (nuevaBase > 0) {
      this.base = nuevaBase;
    } else {
      console.log("La base no puede ser menor a 0");
    }
  }

  get getbase() {
    return this.base;
  }

  mostrardatos() {
    document.writeln(
      `<ul>
        <li>Base: ${this.base}</li>
        <li>Altura: ${this.altura}</li>
        <li>Area: ${this.MetodocalcularArea()}</li>
        <li>Perimetro: ${this.MetodocalcularPerimetro()}</li>
        </ul>`
    );
  }
}

const triangulo1 = new Triangulo(5, 10);
const triangulo2 = new Triangulo(10, 20);
document.writeln(
  `<p> El area del triangulo 1 es: ${triangulo1.MetodocalcularArea()} </p>`
);
document.writeln(
  `El area del triangulo 2 es: ${triangulo2.MetodocalcularArea()}`
);
document.writeln(
  `<p> El perimetro del triangulo 1 es: ${triangulo1.MetodocalcularPerimetro()} </p>`
);
document.writeln(
  `El perimetro del triangulo 2 es: ${triangulo2.MetodocalcularPerimetro()}`
);

triangulo1.mostrardatos();
triangulo2.mostrardatos();
document.writeln(
  `<h3> Los nuevos datos del triangulo 1 son: </h3>`
);
triangulo1.setbase(30);
triangulo1.mostrardatos();
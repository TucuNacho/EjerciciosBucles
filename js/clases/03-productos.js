// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Productos {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.writeln(
      `<ul> 
      <li> Código: ${this.codigo}</li>
      <li> Nombre: ${this.nombre}</li>
      <li> Precio: ${this.precio}</li>
      </ul>`
    );
  }
}

const productos = [
  new Productos("001", "Pan", 1200),
  new Productos("002", "Harina", 1800),
  new Productos("003", "Leche", 2000),
];

for (let i = 0; i < productos.length; i++) {
    productos[i].imprimeDatos();
}
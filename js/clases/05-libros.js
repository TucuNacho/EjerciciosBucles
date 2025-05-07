// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx” Crear al menos 2 objetos libros y utilizar el método mostrarLibro(); Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(isbn, titulo, autor, númeroPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.númeroPaginas = númeroPaginas;
  }

  get getISBN() {
    return this.isbn;
  }
  get getTitulo() {
    return this.titulo;
  }
  get getAutor() {
    return this.autor;
  }
  get getNúmeroPaginas() {
    return this.númeroPaginas;
  }

  set setISBN(isbn) {
    this.isbn = isbn;
  }

  set setTitulo(titulo) {
    this.titulo = titulo;
  }

  set setAutor(autor) {
    this.autor = autor;
  }

  set setNúmeroPaginas(númeroPaginas) {
    this.númeroPaginas = númeroPaginas;
  }

  mostrarLibro() {
    document.writeln(
      `<p> El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.númeroPaginas} </p>`
    );
    console.log(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.númeroPaginas}`
    );
  }
}

const libro1 = new Libro(
  "978-3-16-148410-0",
  "El Alquimista",
  "Paulo Coelho",
  208
);

const libro2 = new Libro(
  "978-0-7432-7356-5",
  "Cien años de soledad",
  "Gabriel García Márquez",
  417
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.númeroPaginas > libro2.númeroPaginas) {
  document.writeln(
    `El libro ${libro1.titulo} tiene más páginas que el libro ${libro2.titulo}`
  );
  console.log(
    `El libro ${libro1.titulo} tiene más páginas que el libro ${libro2.titulo}`
  );
  
} else {
  document.writeln(
    `El libro ${libro2.titulo} tiene más páginas que el libro ${libro1.titulo}`
  );
  console.log(
    `El libro ${libro2.titulo} tiene más páginas que el libro ${libro1.titulo}`
  );
  
}

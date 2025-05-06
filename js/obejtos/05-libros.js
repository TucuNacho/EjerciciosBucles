// const libros = {
//     titulo: "",
//     autor: "",
//     anio: 0,
//     genero: "",

//     crearLibros() {
//         return{
//             titulo: prompt("Ingrese el título del libro"),
//             autor: prompt("Ingrese el autor del libro"),
//             anio: parseInt(prompt("Ingrese el año de publicación")),
//             genero: prompt("Ingrese el género del libro")
//         };
//     }
// };

// Función para crear un nuevo libro
function crearLibro() {
    return {
      titulo: prompt("Ingrese el título del libro"),
      autor: prompt("Ingrese el autor del libro"),
      anio: parseInt(prompt("Ingrese el año de publicación")),
      genero: prompt("Ingrese el género del libro").toLowerCase()
    };
  }
  
  // Creamos un array para almacenar varios libros
  const biblioteca = [];
  
  // Cargar libros mientras el usuario quiera
  while (confirm("¿Querés agregar un libro?")) {
    const nuevoLibro = crearLibro();
    biblioteca.push(nuevoLibro);
  }
  
  // Función para filtrar libros por género
  function filtrarPorGenero(libros, genero) {
    return libros.filter((libro) => libro.genero === genero.toLowerCase());
  }
  
  // Usamos prompt para pedir el género a buscar
  const generoBuscado = prompt("Ingrese el género que desea buscar").toLowerCase();
  const librosFiltrados = filtrarPorGenero(biblioteca, generoBuscado);
  
  // Mostramos los resultados
  document.writeln(`<h2>Libros del género "${generoBuscado}":</h2>`);
  librosFiltrados.forEach((libro) => {
    document.writeln(`<p>${libro.titulo} de ${libro.autor} (${libro.anio})</p>`);
  });
  
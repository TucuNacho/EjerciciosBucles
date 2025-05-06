const libros = {
    titulo: "",
    autor: "",
    anio: 0,
    genero: "",

    crearLibros() {
        return{
            titulo: prompt("Ingrese el título del libro"),
            autor: prompt("Ingrese el autor del libro"),
            anio: parseInt(prompt("Ingrese el año de publicación")),
            genero: prompt("Ingrese el género del libro")
        };
    }
};

  
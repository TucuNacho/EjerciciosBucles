class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        document.writeln(`<p> Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}. </p>`);
    }

    despedirse() {
        document.writeln(`<p> Adiós, ${this.nombre}. </p>`);
    }
}

const persona1 = new Persona("Juan", 30, "Ingeniero");
const persona2 = new Persona("María", 25, "Diseñadora");

persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();
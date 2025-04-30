const string = prompt("Introduce un texto");

const texto=(string) => {
    if (string===string.toLowerCase()) {
        return"El texto está en minúsculas";{

    }
}else if (string===string.toUpperCase()) {
    return "El texto está en mayúsculas";
} else {
    return "El texto tiene mayúsculas y minúsculas";
    }
};

texto(string);
document.writeln(texto(string));
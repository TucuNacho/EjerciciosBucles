//Declar un array vacio
const paises = [];
//array con datos
const comidas = ["🍔", 2.5, true, "pizza", 25];

//declaración de funciones
function listarComidas(titulo) {
  document.writeln(`<h3>${titulo}</h3>`);
  document.writeln(`<ul>`);
  for (let i = 0; i < comidas.length; i++) {
    document.writeln(`<li>${comidas[i]}</li>`);
  }
  document.writeln(`</ul>`);
}

//mostrar el array
console.log(paises);
console.log(comidas);

//mostrar array en el html
document.writeln(paises + "<br>");
document.writeln(comidas);
document.writeln("<br>Cantidad de elementos en el array: " + comidas.length);

//i++
//i = i+1
listarComidas("Mostrar el array de comidas");

//Agregar elementos al array
comidas.unshift("🍟", "🍕");
listarComidas("Agregar un elemento al principio del array");

comidas.push("🥗");
listarComidas("Agregar un elemento al final del array");

comidas.splice(3, 0, "🥐");
listarComidas("Agregar un elemento en el medio del array");

comidas.shift();
listarComidas("Borrar un elemento al principio del array");

comidas.pop();
listarComidas("Borrar un elemento al final del array");

comidas.splice(3, 1);
listarComidas("Borrar un elemento en el medio del array");

// comidas.splice(3,2) //esta opcion borra dos elementos desde la posicion 3
// comidas.splice(3) //borra todo desde la posicion 3
console.log(comidas[5]);
console.log(comidas[comidas.length - 1]);
comidas[5] = "🍞";
listarComidas("Modificar un elemento del array");

//como sabemos si existe un dato en el array
const hamburguesa = comidas.find( (comida) => comida === '🍔' )
const hamburguesaPosition = comidas.findIndex( (comida) => comida === '🍔' )
const ensalada = comidas.find( (comida) => comida === '🥗' )
const ensaladaPosition = comidas.findIndex( (comida) => comida === '🥗' )
console.log(hamburguesa)
console.log('Indice de la hamburguesa ' + hamburguesaPosition)
console.log(ensalada)
console.log('Indice de la ensalada ' + ensaladaPosition)

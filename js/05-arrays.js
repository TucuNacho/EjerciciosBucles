//Declar un array vacio

const paises = [];
//array con datos
const comidas = ["🍔", 2.5, true, "pizza", 25];

//mostrar el array
console.log(paises);
console.log(comidas);

//mostrar array en el html
document.writeln(paises + "<br>");
document.writeln(comidas);
document.writeln("<br>Cantidad de elementos en el array: " + comidas.length);

//i++
//i = i+1
document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);

//Agregar elementos al array
document.writeln("<h3>Agregar un elemento al principio del array</h3>");
comidas.unshift("🍟", "🍕");

document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);

document.writeln("<h3>Agregar un elemento al final del array</h3>");
comidas.push("🥗");

document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);

document.writeln("<h3>Agregar un elemento en el medio del array</h3>");
comidas.splice(3, 0, "🥐");

document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);

document.writeln("<h3>Borrar un elemento al principio del array</h3>");
comidas.shift();

document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);

document.writeln("<h3>Borrar un elemento al final del array</h3>");
comidas.pop();

document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);

document.writeln("<h3>Borrar un elemento en el medio del array</h3>");
comidas.splice(3,1)
// comidas.splice(3,2) //esta opcion borra dos elementos desde la posicion 3
// comidas.splice(3) //borra todo desde la posicion 3

document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);

document.writeln("<h3>Modificar un elemento del array</h3>");

console.log(comidas[5])
console.log(comidas[comidas.length - 1])

comidas[5] = '🍞'
document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);
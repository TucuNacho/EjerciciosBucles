const paises = []
const comidas = ["tacos", "hamburguesa", "pizza", "sushi", "pasta"]
document.writeln(`<ul>`);
for (let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`);
}
document.writeln(`</ul>`);
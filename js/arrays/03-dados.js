const dadosTotal = Array(13).fill(0);

document.writeln("<table>");
document.writeln("<tr>");
document.writeln("<th>Súma</th>");
document.writeln("<th>Apariciones</th>");
document.writeln("</tr>");
for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma= dado1 + dado2;
  dadosTotal[suma]++;
}
for (let i= 2; i < dadosTotal.length; i++) {
    document.writeln("<tr>")
    document.writeln("<td>" + i + "</td>");
    document.writeln("<td>" + dadosTotal[i] + "</td>");
    document.writeln("</tr>");
}
document.writeln("</table>");

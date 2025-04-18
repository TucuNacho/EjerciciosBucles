//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

do {
    const nota = Number(prompt("Ingrese una nota entre 0 y 10"));
    if (Number.isNaN(nota)) {
        alert("❌ Ingresaste un valor inválido");
        continue;
    }else if (nota < 0 || nota > 10){
        alert("❌ Ingresaste un valor inválido");
        continue;
    }else if (nota>= 0 && nota <= 2) {
        document.writeln("😞 Muy deficiente");
    }else if (nota >= 3 && nota <= 4) {
        document.writeln("😟 Insuficiente");
    }else if (nota >= 5 && nota <= 6) {
        document.writeln("😐 Suficiente");
    }else if (nota=== 7){
        document.writeln("😃 Bien");
    }else if (nota>= 8 && nota <= 9){
        document.writeln("😁 Notable");
    }else if (nota === 10){
        document.writeln("🤩 Sobresaliente");
    }
}while (confirm("¿Deseas ingresar otra nota?"));

const nombre = prompt("Ingrese un nombre");
let resultado = 0;
let cantidadNotas = 0;

let continuar = true;
while (continuar) {
    const nota = parseFloat(prompt("Ingrese una nota (ingrese 0 para finalizar):"));

    if (isNaN(nota)) {
        alert("Por favor, ingrese un número válido.");
    } else if (nota === 0) {
        continuar = false;
    } else if (nota >= 1 && nota <= 10) {
        resultado += nota;
        cantidadNotas++;    
    } else {
        alert("Ingrese un número válido entre 1 y 10.");
    }
}

if (cantidadNotas > 0) {
    const promedio = resultado / cantidadNotas;
    const notaFinal = nombre + ", tu promedio es de "+ promedio;
    alert(notaFinal);
} else {
    alert("No se ingresaron notas válidas.");
} 

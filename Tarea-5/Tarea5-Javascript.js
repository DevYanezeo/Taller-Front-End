// Tarea 5: Calculo de promedio para notas.

// Arreglo con notas para calcular promedio
let notas = [6,8,9,2,5,10];

console.log("\nPromedio de notas");
let suma = sumarNotas(notas); // LLamada para calcular la sumatoria de las notas y las almacena en la variable "suma"
console.log("La sumatoria de notas es: " + suma);
let promedio = promedioNotas(suma); // Calcula el promedio, recibiendo de entrada la suma
console.log("El promedio de notas es: " +promedio.toFixed(2));


// Bloque de funciones
// 
function sumarNotas (){
    let suma=0;
    for (let nota of notas){
        suma = suma+nota;
    }
    return suma;
}

function promedioNotas (suma){
    let promedio = suma/notas.length;
    return promedio;
}
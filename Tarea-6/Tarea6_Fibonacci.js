// Metodo para generar la secuencia de Fibonacci
function secuenciaFibonacci(limite) {
    const secuencia = [];
    let anterior = 0, actual = 1;

    while (anterior <= limite) {
        secuencia.push(anterior);
        const siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
    }
    
    return secuencia;
}

// Llamada a fibonacci con limite = 1000
const fibonacci = secuenciaFibonacci(1000);

// Filtrar números par e impar
const numerosPares = [];
const numerosImpares = [];

for (let numero of fibonacci) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    } else {
        numerosImpares.push(numero);
    }
}

// Salida formateada de resultados
console.log("=".repeat(40)); 
console.log(">> Secuencia de Fibonacci entre 0 y 1000");
console.log("-".repeat(40));
console.log(fibonacci.join(", "));
console.log("=".repeat(40));
console.log("");

console.log("=".repeat(40));
console.log(">> Números pares entre 0 y 1000");
console.log("-".repeat(40));
console.log(numerosPares.join(", "));
console.log("=".repeat(40));
console.log("");

console.log("=".repeat(40));
console.log(">> Números impares entre 0 y 1000");
console.log("-".repeat(40));
console.log(numerosImpares.join(", "));
console.log("=".repeat(40));
console.log("");
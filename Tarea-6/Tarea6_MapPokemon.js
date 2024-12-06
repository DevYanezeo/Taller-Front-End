/* Transformar a mayusculas un arreglo */
const pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

// el arreglo a mayúsculas
const pokemonMayusculas = pokemon.map(nombre => nombre.toUpperCase());

// imprimiendo los arreglos
console.log("Arreglo original:");
console.log(pokemon);
console.log("\nArreglo en mayúsculas:");
console.log(pokemonMayusculas);


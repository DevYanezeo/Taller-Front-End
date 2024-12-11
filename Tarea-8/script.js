/**
 * Función para obtener los datos de los Pokémon.
 * Realiza una solicitud HTTP al endpoint de la API de Pokémon y retorna los primeros 20 resultados.
 *  Utiliza try-catch para manejar errores relacionados con la solicitud HTTP,
 * asegurando que fallos como una URL incorrecta o problemas de red no detengan la ejecución del programa.
 * @returns {Array} - Una lista de Pokémon con su nombre y URL para más detalles.
 */
async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error al obtener los datos de los Pokémon:", error);
    }
}

/**
 * Función para obtener la imagen de un Pokémon. Promesa Asincronica
 * Realiza una solicitud HTTP al endpoint específico del Pokémon y retorna la URL de su imagen.
 *  Utiliza try-catch para manejar errores relacionados con la solicitud HTTP,
 * asegurando que fallos como una URL incorrecta o problemas de red no detengan la ejecución del programa.
 * @param {string} url - La URL con los detalles del Pokémon.
 * @returns {string} - La URL de la imagen del Pokémon.
 */
async function getPokemonDetails(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error al obtener detalles: ${response.status}`);
        }

        const data = await response.json();
        return data.sprites.front_default;
    } catch (error) {
        console.error("Error al obtener los detalles del Pokémon:", error);
    }
}

/**
 * Función para mostrar los Pokémon en tarjetas.
 * 
 * Crea elementos HTML dinámicamente para mostrar la imagen y el nombre de cada Pokémon en el contenedor.
 */
async function displayPokemonCards() {
    const pokemonContainer = document.getElementById('pokemon-container');

    const pokemons = await fetchPokemonData();

    if (pokemons) {
        for (const pokemon of pokemons) {
            const imageUrl = await getPokemonDetails(pokemon.url);

            const card = document.createElement('div');
            card.className = 'pokemon-card';

            const image = document.createElement('img');
            image.src = imageUrl;
            image.alt = pokemon.name;

            const name = document.createElement('p');
            name.textContent = pokemon.name;

            card.appendChild(image);
            card.appendChild(name);

            pokemonContainer.appendChild(card);
        }
    }
}

/**
 * Inicializa la visualización de los Pokémon al cargar la página.
 */
displayPokemonCards();

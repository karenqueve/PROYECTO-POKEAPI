let ALL__RESULT = [];

const getOnePokemonFromApi = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    
    ALL__RESULT.push(pokemon);
};

const paintPokemons = (pokemonToPaint) => {
    const pokedex$$ = document.querySelector('#pokedex');
    pokedex$$.innerHTML = '';

    pokemonToPaint.forEach(pokemon => {
        const pokemonContainer$$ = document.createElement('div');

        const html = `
        <div>${pokemon.name}</div>
        <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
        `;

        pokemonContainer$$.innerHTML = html;
        pokedex$$.appendChild(pokemonContainer$$);
    });
}
const getAllPokemons = async () => {
    for (let id = 1; id <= 151; id++) {
      await getOnePokemonFromApi(id);
    }
    
    paintPokemons(ALL__RESULT);
}
document.getElementById('search-input').addEventListener('input', (event) => {
  console.log(event.target.value);
});

getAllPokemons();  
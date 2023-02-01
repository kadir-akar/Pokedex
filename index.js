function pokemonImg() {
  fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
pokemonImg();

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon"
const pokemonGrid = document.querySelector(".grid")

function getPokemon() {
  fetch(POKEMON_API)
    .then((res) => res.json())
    .then((content) => {
      const pokemonArray = content.results

      for (let i = 0; i < pokemonArray.length; i++) {
        const pokemonCard = document.createElement("div")
        pokemonCard.classList.add("pokemon-card")
        pokemonGrid.appendChild(pokemonCard)

        const pokemonName = document.createElement("p")
        pokemonName.classList.add("pokemon-name")
        pokemonName.innerText = pokemonArray[i].name.toUpperCase()
        pokemonCard.appendChild(pokemonName)

        const pokemonURL = pokemonArray[i].url

        fetch(pokemonURL)
          .then((res) => res.json())
          .then((content) => {
            const imgURL = content.sprites.front_default

            const pokemonImg = document.createElement("img")
            pokemonImg.src = imgURL
            pokemonCard.appendChild(pokemonImg)
          })
      }
    })
}
getPokemon()

import React from "react";
import { mockPokemonData } from "../mock/pokeData";

//console.log(mockPokemonData.name);

function PokeCard() {
  let pokemonName = mockPokemonData.name;
  let spriteDefault = mockPokemonData.sprites.front_default;
  let spriteShiny = mockPokemonData.sprites.front_shiny;
  let pokemonVideo = mockPokemonData.video;

  return (
    <div>
      <h1> {pokemonName} </h1>
      <p></p>
      <p></p>
    </div>
  );
}

export default PokeCard;

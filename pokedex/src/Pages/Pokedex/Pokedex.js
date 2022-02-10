import React, { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const Pokedex = () => {
  const { pokedex, setPokedex } = useContext(GlobalContext);
  const { pokemonList, setPokemonList } = useContext(GlobalContext);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const removePokemon = (pokemonToRemove) => {
    console.log("entrei");

    const position = pokedex.findIndex((pokemon) => {
      return pokemon.id === pokemonToRemove.id;
    });

    let newPokedex = [...pokedex];

    console.log(newPokedex);

    if (newPokedex[position] === 1) {
      newPokedex.splice(position, 1);
    }

    setPokedex(newPokedex);
    console.log(newPokedex);
  };

  const pokedexList =
    pokedex.length === 0 ? (
      <h1><strong>Vá caçar seus pokemons!</strong></h1>
    ) : (
      pokedex.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            image={
              pokemon && pokemon.sprites.other["official-artwork"].front_default
            }
            name={capitalizeFirstLetter(pokemon && pokemon.name)}
            id={pokemon.id}
            onClickRemove={() => removePokemon(pokemon)}
            buttonName={"Remover"}
          />
        );
      })
    );

  return (
    <div>
      <Header firstButton={"Pokedex"} secondButton={"Pokelist"} />
      <div>
        {pokedexList}
      </div>
    </div>
  );
};
export default Pokedex;

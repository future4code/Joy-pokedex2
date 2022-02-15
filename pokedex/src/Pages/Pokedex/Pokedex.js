import React, { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container } from "../../Pages/Pokedex/styled";

const Pokedex = () => {
  const { pokedex, setPokedex } = useContext(GlobalContext);
  const { pokemonList, setPokemonList } = useContext(GlobalContext);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const removePokemon = (poke) => {
    console.log("entrei");

    const newPokedex = pokedex.filter((item) => item.id !== poke.id);

    setPokedex(newPokedex);

    console.log(newPokedex);
  };

  const pokedexList =
    pokedex.length === 0 ? (
      <h1>
        <strong>Vá caçar seus pokemons!</strong>
      </h1>
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
            onClickHandle={() => removePokemon(pokemon)}
            buttonName={"Remover"}
          />
        );
      })
    );

  return (
    <div>
      <Header firstButton={"Pokedex"} secondButton={"Pokelist"} />

      <div>
        <Container>{pokedexList}</Container>
      </div>
    </div>
  );
};
export default Pokedex;

import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import GlobalContext from "../../context";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container } from "./styled";

const Home = () => {
  const { pokemonList, setPokemonList } = useContext(GlobalContext);
  const history = useHistory();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const pokemonMapped = pokemonList.map((pokemon) => {
    return (
      <PokemonCard key={pokemon && pokemon.id}
      image = {
        pokemon && pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      }
      
      name = {capitalizeFirstLetter(pokemon && pokemon.name)}
      id = {pokemon.id}
      > 

        {/* <img
          alt={pokemon.name}
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
        />
        <p>
          <strong>{capitalizeFirstLetter(pokemon.name)}</strong>
        </p>

        <p>#{pokemon.id}</p> */}
      </PokemonCard>
    );
  });

  return (
    <div>
      <Header 
      firstButton = {"Pokedex"}
      secondButton = {"Pokelist"}
      />
      <Container>{pokemonMapped}</Container>
    </div>
  );
};
export default Home;

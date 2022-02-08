import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";

const PokemonDetails = () => {
  const { pokemonList, setPokemonList } = useContext(GlobalContext);

  return (
    <div>
      <Header 
      firstButton={"Pokedex"} 
      secondButton={"Pokelist"} 
      />
      PokemonDetails
    </div>
  );
};
export default PokemonDetails;

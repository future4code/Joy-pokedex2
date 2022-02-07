import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import GlobalContext from "../../context";

const PokemonDetails = () => {
  const { pokemonList, setPokemonList } = useContext(GlobalContext);

  return (
    <div>
      <Header />
      PokemonDetails
    </div>
  );
};
export default PokemonDetails;

import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import GlobalContext from "../../context";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { pokemonList } = useContext(GlobalContext);
  const history = useHistory();

  return (
    <div>
      <Header />
      <div>
        Home
        {pokemonList &&
          pokemonList.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <p>{pokemon.name}</p>
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Home;

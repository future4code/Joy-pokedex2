import React, { useContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../Constants/BASE_URL";

const Home = () => {
  const { pokemonList, setPokemonList } = useContext(GlobalContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState(pokemonList);

  useEffect(() => {
    if (pokemonList.lenght === 0 || !pokemonList[0]) {
      const list = [];
      axios
        .get(`${BASE_URL}`)
        .then((res) => {
          const initialPokemonList = res.data.results;
          initialPokemonList.forEach((item) => {
            axios
              .get(`${item.url}`)
              .then((res) => {
                list.push(res.data);
                if (list.length == initialPokemonList.length) {
                  setPokemons(list);
                }
              })
              .catch((err) => {
                console.log("Erro ao extrair detalhes dos pokemons", err);
              });
          });
        })
        .catch((err) => {
          console.log("Erro ao carregar lista de pokemons", err);
        });
    } else {
      setPokemons(pokemonList);
    }
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Header firstButton={"Pokedex"} secondButton={"Pokelist"} />
      <Container>
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon && pokemon.id}
              image={
                pokemon &&
                pokemon.sprites.other["official-artwork"].front_default
              }
              name={capitalizeFirstLetter(pokemon && pokemon.name)}
              id={pokemon.id}
            />
          );
        })}
      </Container>
    </div>
  );
};
export default Home;

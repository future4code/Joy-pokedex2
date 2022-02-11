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
  const { pokedex, setPokedex } = useContext(GlobalContext);
  const [pokemons, setPokemons] = useState(pokemonList);

  const addToPokedex = (pokemonToAdd) => {
    console.log("entrou");

    const position = pokedex.findIndex((pokemon) => {
      return pokemon.id === pokemonToAdd.id;
    });

    console.log(position);

    const newPokedex = [...pokedex];

    console.log(newPokedex);

    if (position === -1) {
      newPokedex.push({ ...pokemonToAdd });
    }

    setPokedex(newPokedex);

    const newPokemonList = pokemons.filter(
      (pokemon) => pokemon.id !== pokemonToAdd.id
    );

    setPokemons(newPokemonList);
  };

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
      const newPokemonList = pokemons.filter(
        (pokemon) => !pokedex.some((item) => item.id === pokemon.id)
      );
      setPokemons(newPokemonList);
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
              onClickHandle={() => addToPokedex(pokemon)}
              buttonName={"Adicionar"}
            />
          );
        })}
      </Container>
    </div>
  );
};
export default Home;

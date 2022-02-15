import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Constants/BASE_URL";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";

export const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        const initialPokemonList = res.data.results;
        initialPokemonList.forEach((item) => {
          axios
            .get(`${item.url}`)
            .then((res) => {
              pokemonList.push(res.data);
            })
            .catch((err) => {
              console.log("Erro ao extrair detalhes dos pokemons", err);
            });
        });
      })
      .catch((err) => {
        console.log("Erro ao carregar lista de pokemons", err);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ pokemonList, setPokemonList, pokedex, setPokedex }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Router from "./Route/Router";
import GlobalContext from "./context";
import { BASE_URL } from "../src/Constants/BASE_URL";
import axios from "axios";


const App = () => {

  const [ pokemonList, setPokemonList ] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        // setPokemonList([])
        const initialPokemonList = res.data.results
        initialPokemonList.forEach((item) => {
          axios
          .get(`${item.url}`)
          .then((res) => {
            pokemonList.push(res.data)
            // console.log(res.data)
          })
          .catch((err) => {
            console.log("Erro ao extrair detalhes dos pokemons",err)
          })
        })
      })
      .catch((err) => {
        console.log("Erro ao carregar lista de pokemons", err)
      })
  }, [])


  return (
    <GlobalContext.Provider value={{pokemonList, setPokemonList}}>
      <GlobalStyles />
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;

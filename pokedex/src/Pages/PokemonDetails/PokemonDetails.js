import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { BASE_URL } from "../../Constants/BASE_URL";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    getPokemon(id);
  }, []);

  const getPokemon = (id) => {
    axios
      .get(`${BASE_URL}/${id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Header firstButton={"Pokedex"} secondButton={"Pokelist"} />
      {pokemon ? (
        <div>
          <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
          <div>
            <h3>Principais ataques</h3>
            <p>{capitalizeFirstLetter(pokemon.moves[0].move.name)}</p>
            <p>{capitalizeFirstLetter(pokemon.moves[1].move.name)}</p>
            <p>{capitalizeFirstLetter(pokemon.moves[2].move.name)}</p>
            <p>{capitalizeFirstLetter(pokemon.moves[3].move.name)}</p>
          </div>
          <div>
            <h3>Tipo</h3>
            <p>
              {capitalizeFirstLetter(
                pokemon &&
                  pokemon.types[0] &&
                  pokemon.types[0].type &&
                  pokemon.types[0].type.name
              )}
            </p>
            <p>
              {pokemon &&
                pokemon.types[1] &&
                pokemon.types[1].type &&
                capitalizeFirstLetter(pokemon.types[1].type.name)}
            </p>
          </div>
          <div>
            <h3>Medidas</h3>
            <p>
              {pokemon.height}00 <strong>cm</strong>
            </p>
            <p>
              {pokemon.weight}00 <strong>g</strong>
            </p>
          </div>
          <div>
            <h3>Status</h3>
            <p><strong>{capitalizeFirstLetter(pokemon.stats[0].stat.name)}</strong> = {pokemon.stats[0].base_stat}</p>
            <p><strong>{capitalizeFirstLetter(pokemon.stats[1].stat.name)}</strong> = {pokemon.stats[1].base_stat}</p>
            <p><strong>{capitalizeFirstLetter(pokemon.stats[2].stat.name)}</strong> = {pokemon.stats[2].base_stat}</p>
            <p><strong>{capitalizeFirstLetter(pokemon.stats[3].stat.name)}</strong> = {pokemon.stats[3].base_stat}</p>
            <p><strong>{capitalizeFirstLetter(pokemon.stats[4].stat.name)}</strong> = {pokemon.stats[4].base_stat}</p>
          </div>
          <div>
            <img
              alt={pokemon.name}
              src={
                pokemon ? (
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                ) : (
                  <p>Carregando...</p>
                )
              }
            />
          </div>
          <div>
            <img
              alt={pokemon.name}
              src={
                pokemon ? (
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                ) : (
                  <p>Carregando...</p>
                )
              }
            />
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};
export default PokemonDetails;

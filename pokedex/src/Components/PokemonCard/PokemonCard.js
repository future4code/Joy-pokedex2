import React from "react";
import { ContainerCard } from "./styled";
import Pokebola from "../../Assets/Imagens/pokebola.png";

const PokemonCard = (props) => {
  return (
    <ContainerCard>
      <div>
        <img alt={props.name} src={props.image} /> <br />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <button>Adicionar</button>
        <button>Detalhes</button>
      </div>
    </ContainerCard>
  );
};
export default PokemonCard;
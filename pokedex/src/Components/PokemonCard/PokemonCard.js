import React, { useContext }  from "react";
import { ContainerCard } from "./styled";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../context";
import Pokebola from "../../Assets/Imagens/pokebola.png";

const PokemonCard = (props) => {
  // const id = useContext (GlobalContext)
  const history = useHistory()

  const goToDetails = () => {
    history.push(`/pkmdetails/${props.id}`)
  }

  return (
    <ContainerCard>
      <div>
        <img alt={props.name} src={props.image} /> <br />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <p>#{props.id}</p>
      </div>
      <div>
        <button>Adicionar</button>
        <button onClick={() => {goToDetails()}}>Detalhes</button>
      </div>
    </ContainerCard>
  );
};
export default PokemonCard;
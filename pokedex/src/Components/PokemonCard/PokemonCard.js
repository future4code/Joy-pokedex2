import React, { useContext }  from "react";
import { ContainerCard, ButtonContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContext";

const PokemonCard = (props) => {
  const { pokemonList } = useContext(GlobalContext);
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
        <p>#{props.id}</p>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <ButtonContainer>
        <button>Adicionar</button>
        <button onClick={() => {goToDetails()}}>Detalhes</button>
      </ButtonContainer>
    </ContainerCard>
  );
};
export default PokemonCard;
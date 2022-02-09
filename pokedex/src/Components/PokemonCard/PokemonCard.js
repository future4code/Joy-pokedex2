import React, { useContext } from "react";
import { ContainerCard, ButtonContainer } from "./styled";
import { useHistory } from "react-router-dom";

const PokemonCard = (props) => {
  const history = useHistory();

  const goToDetails = (id) => {
    history.push(`/pkmdetails/${id}`);
  };

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
        <button
          onClick={() => {
            goToDetails(props.id);
          }}
        >
          Detalhes
        </button>
      </ButtonContainer>
    </ContainerCard>
  );
};
export default PokemonCard;

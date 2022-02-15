import React from "react";
import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 150px;
  height: 200px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  button {
    margin: 0px 5px 0px 5px;
    padding: 5px 5px 5px 5px;
    height: 100%;
    width: 50%;
    justify-content: space-between;
    background-color: #2a413d;
    color: #f7f7fd;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    :hover{
      background-color: red;
    }
  }
  img {
    height: 7rem;
    width: 7rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 160px;
  margin-top: 20px;
`;

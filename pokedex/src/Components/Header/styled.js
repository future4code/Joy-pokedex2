import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: red;
  align-items: center;
  justify-content: space-between;
  button {
    margin: 15px;
    height: 60%;
    min-width: 20%;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: #2A413D;
    font-size: 100%;
  }
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

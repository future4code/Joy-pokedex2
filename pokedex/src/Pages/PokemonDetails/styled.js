import React from "react";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
font-weight: bold;
padding: 10px;
text-align: center;
flex-wrap: wrap;
column-gap: 50px;
row-gap: 15px;
  h1{
    margin-top: 15px;
  }

`
export const ContainerInfo = styled.div`
  margin-left: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 30px;
`

export const Atacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 8px;
  width: 190px;
  height: 200px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
      h3{
        padding-bottom: 20px;
        text-decoration: underline;
      }
      p{
        padding-bottom: 10px;
      }

`
export const PokemonType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  width: 160px;
  height: 26px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: royalblue;
`

export const PokemonSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 8px;
  width: 190px;
  height: 200px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
      h3{
        margin-bottom: 30px;
        text-decoration: underline;
      }
      p{
        margin-bottom: 10px;
      }
`
export const PokemonStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 8px;
  width: 190px;
  height: 200px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
      h3{
        margin-bottom: 20px;
        text-decoration: underline;
      }
      p{
        margin-bottom: 10px;
      }
`

export const PokemonFrontView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 8px;
  width: 190px;
  height: 200px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
      img{
        height: 70px;
        height: 70px;
      }
`

export const PokemonBackView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 8px;
  width: 190px;
  height: 200px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  img{
        height: 70px;
        height: 70px;
      }
`
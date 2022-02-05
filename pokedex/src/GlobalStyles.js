import { createGlobalStyle } from "styled-components";
import Background from "../src/Assets/Imagens/background.jpg"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-image: url(${Background});
        background-size: cover;

    }


`
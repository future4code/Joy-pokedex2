import { Container } from "./styled";
import { useHistory } from "react-router-dom"
import Pokebola from "../../Assets/Imagens/pokebola.png"

const Header = () => {

    const history = useHistory()

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goHome = () => {
        history.push("/")
    }

    return(
        <Container>
            <button onClick={goToPokedex}>Ir Para Pokedex</button>
            <img alt="pokebola" src={Pokebola}/>
            <button onClick={goHome}>Ir para lista de Pokemons</button>
        </Container>

    )
}
export default Header;
import { Container } from "./styled";
import { useHistory } from "react-router-dom"
import Pokebola from "../../Assets/Imagens/pokebola.png"
import { Image } from "./styled";

const Header = (props) => {

    const history = useHistory()

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goHome = () => {
        history.push("/")
    }

    return(
        <Container>
            <button onClick={goToPokedex}>{props.firstButton}</button>
            <Image alt="pokebola" src={Pokebola}/>
            <button onClick={goHome}>{props.secondButton}</button>
        </Container>

    )
}
export default Header;
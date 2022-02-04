import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex"
import PokemonDetails from "../Pages/PokemonDetails/PokemonDetails"


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>

        <Route exact path={"pkmdetails"}>
          <PokemonDetails />
        </Route>

        <Route>
          <div> Página não encontrada! </div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};
export default Router;

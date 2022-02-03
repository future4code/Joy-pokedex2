import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Pokedex from "../Pages/Pokedex";
import PokemonDetails from "../Pages/PokemonDetails";

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
      </Switch>
    </BrowserRouter>
  );
};
export default Router;

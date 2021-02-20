import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import SpecificPokemon from "./specificPokemon";

// import { Container } from './styles';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pokemon:id" render={(props) => (
                    <SpecificPokemon {...props} />
                )} />
            </Switch>
        </Router>
    );
}

export default Routes;
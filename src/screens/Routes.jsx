import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import Pokemon from "./pokemon";
import Type from "./type";

// import { Container } from './styles';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pokemon/:id" render={(props) => (
                    <Pokemon {...props} />
                )} />
                <Route exact path="/type/:name" render={(props) => (
                    <Type {...props} />
                )}/>
            </Switch>
        </Router>
    );
}

export default Routes;
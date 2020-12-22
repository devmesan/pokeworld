import React from "react";
import { createBrowserHistory } from "history";

import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles/style.scss";
import "./styles/main.css";

import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonList from "./pages/MyPokemonList";
import NotFound from "./pages/NotFound";

function App() {
    const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

    return (
        <>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route
                        exact
                        path="/pokemon-detail"
                        component={PokemonDetail}
                    />
                    <Route
                        exact
                        path="/my-pokemon-list"
                        component={MyPokemonList}
                    />
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>

            <ToastContainer />
        </>
    );
}

export default App;

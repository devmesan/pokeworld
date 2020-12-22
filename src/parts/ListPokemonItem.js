import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import ViewItem from "../components/PokemonList/ViewItem";
import PokemonItem from "../components/PokemonList/PokemonItem";

function ListPokemonItem(props) {
    const dispatch = useDispatch();

    const addPokemonHandler = (id) => {
        let payload = {
            id: id,
        };
    };

    const removePokemonHandler = (id) => {
        let payload = {
            id: id,
        };
    };

    return (
        <>
            <span className="w-2/12 sm:w-1/12 p-2 bg-gray-200 hover:bg-gray-400 text-gray-800 text-center text-bold">
                {props.countering}
            </span>
            <PokemonItem
                className="w-6/12 sm:w-8/12 p-2 text-gray-800 text-left text-bold"
                name={props.pokemonId}
                pokemonId={props.pokemonId}
                pokemon={props.pokemon}
            ></PokemonItem>
            <ViewItem
                className="w-4/12 sm:w-3/12 justify-between text-center"
                max={props.max}
                name={`barang-${props.pokemonId}`}
                pokemonId={props.pokemonId}
                quantity={props.quantity}
                value={props.value}
                productAdded={() => addPokemonHandler(props.pokemonId)}
                productRemoved={() => removePokemonHandler(props.pokemonId)}
                adjust={props.adjust}
            ></ViewItem>
        </>
    );
}

export default withRouter(ListPokemonItem);

import React from "react";
import { withRouter } from "react-router-dom";

import PokemonItem from "../components/PokemonList/PokemonItem";
import TotalItem from "../components/PokemonList/TotalItem";
import ActionItem from "../components/PokemonList/ActionItem";

function ListPokemonItem(props) {
    return (
        <>
            <span className="w-2/12 sm:w-1/12 p-2 cursor-default break-words bg-gray-200 hover:bg-gray-400 text-gray-800 text-center text-bold border-2 border-steel-300">
                {props.countering}
            </span>
            <PokemonItem
                className="text-gray-800 text-left text-bold border-2 border-steel-300"
                nickname={props.nickname}
                showNickname={props.showNickname}
                pokemonId={props.pokemonId}
                pokemon={props.pokemon}
                pokemonDetail={() => props.pokemonDetail()}
            ></PokemonItem>
            {props.showTotal === true && (
                <TotalItem
                    className={[
                        "text-center border-2 border-steel-300",
                        props.classTotalItem,
                    ].join(" ")}
                    value={props.value}
                ></TotalItem>
            )}
            {props.showAction === true && (
                <ActionItem
                    className={[
                        "justify-center text-center",
                        props.classActionItem,
                    ].join(" ")}
                    removePokemon={props.removePokemon}
                    value={props.value}
                ></ActionItem>
            )}
        </>
    );
}

export default withRouter(ListPokemonItem);

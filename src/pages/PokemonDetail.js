import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Header from "../parts/Header";
import ListPokemonItem from "../parts/ListPokemonItem";
import Footer from "../parts/Footer";

import Loading from "../parts/Loading";

import { initPokemon } from "../store/actions/action.pokemon";

function PokemonDetail({ history }) {
    const dispatch = useDispatch();
    const POKEMON = useSelector((state) => state.pokemon);
    const MYPOKEMON = useSelector((state) => state.mypokemon);

    // const pokeChance = () => {
    //     const pokeChance = [0, 1].sort(() => Math.random() - 0.5)[0];

    //     if (pokeChance) console.log("Gotcha");
    //     else console.log("Oh failed, try again!");
    // };

    // pokeChance();

    useEffect(() => {
        document.title = "Front End || Pokemon List Page";
        window.scroll(0, 0);
        dispatch(initPokemon({ url: POKEMON.url }));
    }, [dispatch, POKEMON.url]);

    const purchaseContinueHandler = () => {
        // const payload = {
        //     products: POKEMON.pokemons,
        //     totalPokemonOwn: POKEMON.COUNTPokeOwn,
        // };
        // dispatch(initPokemon(payload));
        history.push("/checkout");
    };

    return (
        <>
            {POKEMON.loading === true && <Loading></Loading>}
            <div className="site-container">
                <Header counter={MYPOKEMON.totalOwnPokemon}></Header>
                <main className="site-content">
                    <>
                        <div className="m-4">
                            <span className="text-gray-800 text-3xl font-extrabold">
                                Pokemon List
                            </span>
                        </div>
                    </>
                    {POKEMON.error === true && (
                        <>
                            <span className="text-center text-xl">
                                <h1>{POKEMON.message}</h1>
                            </span>
                        </>
                    )}
                    {POKEMON.error === false &&
                        (POKEMON.count > 0 ? (
                            <>
                                <div className="flex m-4 gap-2 text-center font-bold text-gray-800">
                                    <span className="w-2/12 sm:w-1/12 py-2 bg-gray-400">
                                        No
                                    </span>
                                    <span className="w-6/12 sm:w-8/12 py-2 bg-gray-400">
                                        Pokemon
                                    </span>
                                    <span className="w-4/12 sm:w-3/12  py-2 bg-gray-400">
                                        Total
                                    </span>
                                </div>
                                {Object.values(POKEMON.pokemons)?.map?.(
                                    (item, index) => {
                                        let str = item.url;
                                        let res = str.split(
                                            "https://pokeapi.co/api/v2/pokemon/"
                                        );
                                        let id = res[1].replace("/", "");

                                        return (
                                            <div
                                                className="ListPokemonItem hover:bg-blue-400 flex m-4 gap-2"
                                                key={index}
                                            >
                                                <ListPokemonItem
                                                    pokemon={item.name}
                                                    pokemonId={id}
                                                    url={item.url}
                                                    value={
                                                        POKEMON.pokemons[index]
                                                            .totalOwnPokemon
                                                    }
                                                    quantity={0}
                                                    max={99}
                                                    adjust={false}
                                                    countering={index + 1}
                                                ></ListPokemonItem>
                                            </div>
                                        );
                                    }
                                )}
                                <p className="m-5 text-gray-700 font-bold text-xl">
                                    Total Pokemon : {POKEMON.count}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="m-5 text-red-700 text-center text-2xl font-bold">
                                    Data Tidak Tersedia.
                                </p>
                                <p className="m-5 text-gray-700 font-bold text-xl">
                                    Total Pokemon : {POKEMON.count}
                                </p>
                            </>
                        ))}
                    <div className="flex justify-end m-5">
                        {POKEMON.error === false && (
                            <>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 focus:outline-none p-3 m-0 text-white font-medium rounded"
                                    onClick={purchaseContinueHandler}
                                >
                                    Next
                                </button>
                            </>
                        )}
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default withRouter(PokemonDetail);

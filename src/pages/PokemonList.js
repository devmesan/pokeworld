import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Header from "../parts/Header";
import ListPokemonItem from "../parts/ListPokemonItem";
import Menu from "../parts/Menu";
import Footer from "../parts/Footer";

import Loading from "../parts/Loading";

import {
    initPokemon,
    changeHomePage,
    detailPokemonId,
} from "../store/actions/action.pokemon";

import { ReactComponent as Cube } from "../assets/icons/ic_cube.svg";
import { ReactComponent as ChevronDoubleLeft } from "../assets/icons/ic_chevron_double_left.svg";
import { ReactComponent as ChevronDoubleRight } from "../assets/icons/ic_chevron_double_right.svg";

function PokemonList({ history }) {
    const dispatch = useDispatch();

    const POKEMON = useSelector((state) => state.pokemon);
    const MYPOKEMON = useSelector((state) => state.mypokemon);

    useEffect(() => {
        document.title = "Poke World || Pokemon Page";
        window.scroll(0, 0);
        dispatch(
            initPokemon({
                url: POKEMON.url,
                pokemonCollection: MYPOKEMON.pokemonCollection,
            })
        );
    }, [dispatch, POKEMON.url, MYPOKEMON.pokemonCollection]);

    const switchPokemonHandler = (change) => {
        let tempUrl;
        if (change === "next") {
            tempUrl = POKEMON.nextUrl;
        } else if (change === "previous") {
            tempUrl = POKEMON.prevUrl;
        } else {
            tempUrl = POKEMON.urlFirstPage;
        }
        let payload = {
            url: tempUrl,
        };
        dispatch(changeHomePage(payload));
    };

    const detailPokemonHandler = (pokemonId) => {
        let payload = {
            pokemonId: pokemonId,
        };
        dispatch(detailPokemonId(payload));
        history.push(`/pokemon-detail/${pokemonId}`);
    };

    const myPokemonHandler = (pokemonId) => {
        history.push(`/my-pokemon-list`);
    };

    return (
        <>
            {POKEMON.loading === true && <Loading></Loading>}
            <div className="site-container">
                <Header counter={MYPOKEMON.totalOwnPokemon}></Header>
                <main className="site-content">
                    <>
                        <div className="m-4 mb-0 inline-flex">
                            <Cube className="h-8 w-8 mr-1 self-center fill-current text-cerulean-500"></Cube>

                            <span className="text-gray-700 text-3xl font-extrabold uppercase">
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
                        (POKEMON.pokemons.length > 0 ? (
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
                                        return (
                                            <div
                                                className="ListPokemonItem hover:bg-blue-400 flex m-4 gap-2"
                                                key={index}
                                            >
                                                <ListPokemonItem
                                                    pokemon={item.name}
                                                    showNickname={false}
                                                    pokemonId={item.pokemonId}
                                                    value={
                                                        POKEMON.pokemons[index]
                                                            .totalOwnPokemon
                                                    }
                                                    countering={
                                                        POKEMON.startNumPokemon +
                                                        index
                                                    }
                                                    pokemonDetail={() =>
                                                        detailPokemonHandler(
                                                            item.pokemonId
                                                        )
                                                    }
                                                    showTotal={true}
                                                    showAction={false}
                                                    classTotalItem="w-4/12 sm:w-3/12"
                                                    classActionItem=""
                                                ></ListPokemonItem>
                                            </div>
                                        );
                                    }
                                )}
                                <p className="m-5 p-2 text-gray-600 font-bold text-base">
                                    Total Pokemon (Owned) :{" "}
                                    {MYPOKEMON.totalOwnPokemon}
                                    <br />
                                    Total Pokemon Collection :{" "}
                                    {MYPOKEMON.totalPokemonCollection}
                                    <br />
                                    Total Pokemon : {POKEMON.totalPokemon}
                                    <br />
                                    Page : {POKEMON.currentPage} of{" "}
                                    {POKEMON.lastPage}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="m-5 text-red-700 text-center text-2xl font-bold">
                                    Data Tidak Tersedia.
                                </p>
                                <p className="m-5 text-gray-700 font-bold text-base">
                                    Total Pokemon (Owned) :{" "}
                                    {MYPOKEMON.totalOwnPokemon}
                                    <br />
                                    Total Pokemon Collection :{" "}
                                    {MYPOKEMON.totalPokemonCollection}
                                    <br />
                                    Total Pokemon : {POKEMON.totalPokemon}
                                    <br />
                                    Page : {POKEMON.currentPage} of{" "}
                                    {POKEMON.lastPage}
                                </p>
                            </>
                        ))}
                    <div className="mr-5 ml-5">
                        {POKEMON.error === false && POKEMON.prevUrl !== null && (
                            <>
                                <button
                                    className="col-auto inline-flex float-left bg-chocolate-500 hover:bg-chocolate-700 focus:outline-none p-3 mb-10 text-white font-semibold rounded"
                                    onClick={() =>
                                        switchPokemonHandler("previous")
                                    }
                                >
                                    <ChevronDoubleLeft className="h-5 w-5 mr-1 self-center fill-current"></ChevronDoubleLeft>
                                    Previous
                                </button>
                            </>
                        )}
                        {POKEMON.error === false && POKEMON.nextUrl !== null && (
                            <>
                                <button
                                    className="col-auto inline-flex float-right bg-shamrock-500 hover:bg-shamrock-700 focus:outline-none p-3 mb-10 text-white font-semibold rounded"
                                    onClick={() => switchPokemonHandler("next")}
                                >
                                    Next
                                    <ChevronDoubleRight className="h-5 w-5 ml-1 self-center fill-current"></ChevronDoubleRight>
                                </button>
                            </>
                        )}
                    </div>
                </main>
                <Menu
                    showMenu={true}
                    classPokemon="cursor-default"
                    classMyPokemon="cursor-pointer"
                    canClick="myPokemon"
                    methodClick={() => myPokemonHandler()}
                />
                <Footer />
            </div>
        </>
    );
}

export default withRouter(PokemonList);

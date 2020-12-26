import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Header from "../parts/Header";
import ListPokemonItem from "../parts/ListPokemonItem";
import Menu from "../parts/Menu";
import Footer from "../parts/Footer";

import Loading from "../parts/Loading";

import {
    fetchMyPokemonListProcess,
    removePokemonProcess,
    removeAllPokemonProcess,
} from "../store/actions/action.mypokemon";
import { changeHomePage } from "../store/actions/action.pokemon";

import { ReactComponent as Cube } from "../assets/icons/ic_cube.svg";
import { ReactComponent as Trash } from "../assets/icons/ic_trash.svg";
import { ReactComponent as NoData } from "../assets/images/no_data.svg";

function MyPokemonList({ history }) {
    const dispatch = useDispatch();

    const POKEMON = useSelector((state) => state.pokemon);
    const MYPOKEMON = useSelector((state) => state.mypokemon);

    useEffect(() => {
        document.title = "Poke World || My Pokemon Page";
        window.scroll(0, 0);
        dispatch(fetchMyPokemonListProcess());
    }, [dispatch]);

    const myPokemonHandler = () => {
        let payload = {
            url: POKEMON.urlFirstPage,
        };
        dispatch(changeHomePage(payload));
        history.push(`/`);
    };

    const removePokemonHandler = (pokemonId, name, nickname) => {
        let payload = {
            pokemonId: pokemonId,
            name: name,
            nickname: nickname,
        };
        dispatch(removePokemonProcess(payload));
    };

    const releaseAllHandler = () => {
        dispatch(removeAllPokemonProcess());
    };

    return (
        <>
            {MYPOKEMON.loading === true && <Loading></Loading>}
            <div className="site-container">
                <Header />
                <main className="site-content">
                    <>
                        <div className="m-4 mb-0 inline-flex">
                            <Cube className="h-8 w-8 mr-1 self-center fill-current text-cerulean-500"></Cube>
                            <span className="text-gray-700 text-3xl font-extrabold uppercase">
                                My Pokemon List
                            </span>
                        </div>
                    </>
                    {MYPOKEMON.error === true && (
                        <>
                            <span className="text-center text-xl">
                                <h1>{MYPOKEMON.message}</h1>
                            </span>
                        </>
                    )}
                    {MYPOKEMON.error === false &&
                        (MYPOKEMON.ownPokemon.length > 0 ? (
                            <>
                                <div className="flex m-4 gap-1 text-center font-bold text-gray-800">
                                    <span className="w-2/12 sm:w-1/12 py-2 bg-gray-400 border border-gray-400">
                                        No
                                    </span>
                                    <span className="w-4/12 sm:w-4/12 py-2 bg-gray-400 border border-gray-400">
                                        Pokemon
                                    </span>
                                    <span className="w-4/12 sm:w-5/12 py-2 bg-gray-400 border border-gray-400">
                                        Nickname
                                    </span>
                                    <span className="w-2/12 sm:w-2/12 py-2 bg-gray-400 border border-gray-400">
                                        Action
                                    </span>
                                </div>
                                {Object.values(MYPOKEMON.ownPokemon)?.map?.(
                                    (item, index) => {
                                        return (
                                            <div
                                                className="ListPokemonItem hover:bg-blue-400 flex m-4 gap-1"
                                                key={index}
                                            >
                                                <ListPokemonItem
                                                    pokemon={item.name}
                                                    showNickname={true}
                                                    nickname={item.nickname}
                                                    pokemonId={item.pokemonId}
                                                    value={
                                                        POKEMON.pokemons[index]
                                                            .totalOwnPokemon
                                                    }
                                                    countering={index + 1}
                                                    showTotal={false}
                                                    showAction={true}
                                                    classTotalItem=""
                                                    classActionItem="w-2/12 sm:w-2/12 "
                                                    removePokemon={() =>
                                                        removePokemonHandler(
                                                            item.pokemonId,
                                                            item.name,
                                                            item.nickname
                                                        )
                                                    }
                                                ></ListPokemonItem>
                                            </div>
                                        );
                                    }
                                )}
                                <div className="flex flex-col">
                                    <p className="m-5 p-2 text-gray-600 font-bold text-base">
                                        Total Pokemon (Owned) :{" "}
                                        {MYPOKEMON.totalOwnPokemon}
                                        <br />
                                        Total Pokemon Collection :{" "}
                                        {MYPOKEMON.totalPokemonCollection}
                                        <br />
                                        Total Pokemon : {POKEMON.totalPokemon}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="m-4 flex flex-col">
                                    <NoData className="object-contain self-center h-24 m-5 md:h-48 w-full"></NoData>
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
                                    </p>
                                </div>
                            </>
                        ))}
                    {MYPOKEMON.error === false &&
                        MYPOKEMON.ownPokemon.length > 0 && (
                            <>
                                <div className="mr-5 ml-5">
                                    <button
                                        className="col-auto inline-flex float-right bg-tomato-500 hover:bg-tomato-700 focus:outline-none p-3 mb-10 text-white font-semibold rounded"
                                        onClick={releaseAllHandler}
                                    >
                                        <Trash className="h-5 w-5 mr-1 self-center fill-current"></Trash>
                                        Release All
                                    </button>
                                </div>
                            </>
                        )}
                </main>
                <Menu
                    showMenu={true}
                    classPokemon="cursor-pointer"
                    classMyPokemon="cursor-default"
                    canClick="pokemon"
                    methodClick={() => myPokemonHandler()}
                />
                <Footer />
            </div>
        </>
    );
}

export default withRouter(MyPokemonList);

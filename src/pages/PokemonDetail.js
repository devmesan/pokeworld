import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../parts/Header";
import Menu from "../parts/Menu";
import Footer from "../parts/Footer";

import Loading from "../parts/Loading";

import { initDetailPokemon } from "../store/actions/action.pokemon";
import { savePokemonProcess } from "../store/actions/action.mypokemon";

import {
    validateAlphaNumeric,
    alertApp,
    operatePokemon,
} from "../utility/utility";

import { ReactComponent as Save } from "../assets/icons/ic_save.svg";
import { ReactComponent as ThumbDown } from "../assets/icons/ic_thumb_down.svg";
import { ReactComponent as PencilAlt } from "../assets/icons/ic_pencil_alt.svg";
import { ReactComponent as Sparkles } from "../assets/icons/ic_sparkles.svg";
import { ReactComponent as Support } from "../assets/icons/ic_support.svg";
import { ReactComponent as DocumentSearch } from "../assets/icons/ic_document_search.svg";
import { ReactComponent as Fire } from "../assets/icons/ic_fire.svg";
import { ReactComponent as BookOpen } from "../assets/icons/ic_book_open.svg";
import { ReactComponent as ChevronDoubleLeft } from "../assets/icons/ic_chevron_double_left.svg";
import { ReactComponent as Hunt } from "../assets/images/hunt.svg";
import { ReactComponent as NoData } from "../assets/images/no_data.svg";

function PokemonDetail({ history }) {
    const dispatch = useDispatch();

    const [catchPokemon, setCatchPokemon] = useState({
        getPokemon: null,
        message: "",
    });
    const [savePokemonSuccess, setSavePokemonSuccess] = useState(false);

    const POKEMON = useSelector((state) => state.pokemon);
    const MYPOKEMON = useSelector((state) => state.mypokemon);

    useEffect(() => {
        document.title = "Poke World || Pokemon Detail Page";
        window.scroll(0, 0);
        dispatch(initDetailPokemon({ pokemonId: POKEMON.viewDetailPokemonId }));
    }, [dispatch, POKEMON.viewDetailPokemonId]);

    const pokeChance = () => {
        const pokeChance = [0, 1].sort(() => Math.random() - 0.5)[0];
        if (pokeChance)
            setCatchPokemon({
                getPokemon: true,
                message: "Gotcha",
            });
        else
            setCatchPokemon({
                getPokemon: false,
                message: "Oh failed, try again!",
            });
    };

    const myPokemonHandler = (pokemonId) => {
        history.push(`/my-pokemon-list`);
    };

    const leavePokemonHandler = (e) => {
        setCatchPokemon({
            getPokemon: null,
            message: "",
        });
    };

    const backHandler = () => {
        history.goBack();
    };

    const submit = (e) => {
        e.preventDefault();
        let nickname = e.target.nickname.value;
        if (nickname.trim() !== "") {
            let res = validateAlphaNumeric(nickname);
            let payload = {
                pokemonId: POKEMON.viewDetailPokemonId,
                name: POKEMON.pokemonDetail.name,
                nickname: nickname,
            };
            let validate = operatePokemon(
                MYPOKEMON.ownPokemon,
                payload,
                "validate"
            );
            if (res === true) {
                if (validate.resValidate === false) {
                    dispatch(savePokemonProcess(payload));
                    if (!MYPOKEMON.error) {
                        setSavePokemonSuccess(true);
                    }
                } else {
                    let mode;
                    mode = {
                        autoClose: 3000,
                        hideProgressBar: true,
                    };
                    alertApp("error", validate.message, mode);
                }
            } else {
                let message =
                    "Only Character <b>Alphanumeric Allowed</b> for Nickname";
                let mode;
                mode = {
                    autoClose: 3000,
                    hideProgressBar: true,
                };
                alertApp("error", message, mode);
            }
        } else {
            let message =
                "Please <b>Input Nickname</b></b>, before save Pokemon";
            let mode;
            mode = {
                autoClose: 3000,
                hideProgressBar: true,
            };
            alertApp("error", message, mode);
        }
    };

    const formSubmitNickname = () => {
        return (
            <>
                <div className="submitPokemon space-y-4 m-2 border-4 border-dashed border-steel-500 text-center">
                    {catchPokemon.getPokemon === true ? (
                        <>
                            <span className="inline-flex mt-6 mb-6 justify-center font-bold text-2xl">
                                <Sparkles className="h-8 w-8 mr-1 self-center fill-current text-mango-500"></Sparkles>
                                {catchPokemon.message}
                            </span>
                            <form onSubmit={submit}>
                                <span className="flex justify-center">
                                    <PencilAlt className="h-8 w-8 mr-2 mb-6 self-center fill-current text-cerulean-500"></PencilAlt>
                                    <input
                                        name="nickname"
                                        type="text"
                                        className="focus:outline-none border rounded px-2 py-1 mb-6"
                                        placeholder="Nickname"
                                    />
                                </span>
                                <span className="flex justify-around">
                                    <button
                                        type="button"
                                        className="col-auto inline-flex bg-cerise-500 hover:bg-cerise-700 focus:outline-none p-2 px-4 mb-6 text-white text-sm font-semibold rounded"
                                        onClick={leavePokemonHandler}
                                    >
                                        <ThumbDown className="h-4 w-4 mr-1 self-center fill-current"></ThumbDown>
                                        Leave
                                    </button>
                                    <button
                                        type="submit"
                                        className="col-auto inline-flex bg-royalblue-500 hover:bg-royalblue-700 focus:outline-none p-2 px-4 mb-6 text-white text-sm font-semibold rounded"
                                    >
                                        <Save className="h-4 w-4 mr-1 self-center fill-current"></Save>
                                        Save
                                    </button>
                                </span>
                            </form>
                        </>
                    ) : (
                        <>
                            <span className="inline-flex mt-6 mb-6 justify-center font-semibold text-2xl">
                                <Fire className="h-8 w-8 mr-1 self-center fill-current text-mango-500"></Fire>
                                {catchPokemon.message}
                            </span>
                        </>
                    )}
                </div>
            </>
        );
    };

    const saveRedirect = savePokemonSuccess ? (
        <Redirect to="/my-pokemon-list" />
    ) : null;

    return (
        <>
            {saveRedirect}
            {POKEMON.loading === true && <Loading></Loading>}
            <div className="site-container">
                <Header />
                <main className="site-content">
                    <>
                        <div className="m-4 inline-flex">
                            <BookOpen className="h-10 w-10 ml-6 mr-1 self-center fill-current text-cerulean-500"></BookOpen>
                            <span className="text-gray-700 text-3xl font-extrabold uppercase">
                                About {POKEMON.pokemonDetail.name}
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
                        (parseInt(POKEMON.pokemonDetailId) > 0 ? (
                            <>
                                <div className="pokemonDetail">
                                    <div className="space-y-4">
                                        <span className="flex ml-5 mr-5 p-2 relative justify-center items-center z-0">
                                            <Hunt className="absolute object-contain self-center h-full w-full opacity-80"></Hunt>
                                            <span className="bg-manatee-100 bg-opacity-10 z-30">
                                                <img
                                                    className="object-fill h-72 w-72 z-40"
                                                    src={
                                                        POKEMON.pokemonDetail
                                                            .sprites
                                                            .front_default
                                                    }
                                                    alt={`Pokemon ${POKEMON.pokemonDetail.name}`}
                                                />
                                            </span>
                                        </span>
                                        <span className="flex flex-col p-2">
                                            <div className="bg-tomato-700 px-4 py-3 border-b rounded-t sm:px-6">
                                                <span className="inline-flex text-xl font-medium text-white">
                                                    <DocumentSearch className="h-5 w-5 mr-1 self-center fill-current text-white"></DocumentSearch>
                                                    Details Pokemon
                                                </span>
                                            </div>
                                            <div className="bg-white shadow overflow-hidden">
                                                <ul className="divide-y-2 divide-gray-300">
                                                    <li>
                                                        <span className="block bg-gray-100 hover:bg-gray-200">
                                                            <div className="px-4 py-2 sm:px-6">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-bold text-gray-700 truncate">
                                                                        Name
                                                                    </p>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="flex items-center text-sm font-medium text-gray-500 capitalize">
                                                                        {
                                                                            POKEMON
                                                                                .pokemonDetail
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="block bg-gray-100 hover:bg-gray-200">
                                                            <div className="px-4 py-2 sm:px-6">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-bold text-gray-700 truncate">
                                                                        Species
                                                                    </p>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="flex items-center text-sm font-medium text-gray-500 capitalize">
                                                                        {
                                                                            POKEMON
                                                                                .pokemonDetail
                                                                                .species
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="block bg-gray-100 hover:bg-gray-200">
                                                            <div className="px-4 py-2 sm:px-6">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-bold text-gray-700 truncate">
                                                                        Height
                                                                    </p>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="flex items-center text-sm font-medium text-gray-500 capitalize">
                                                                        {
                                                                            POKEMON
                                                                                .pokemonDetail
                                                                                .height
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="block bg-gray-100 hover:bg-gray-200">
                                                            <div className="px-4 py-2 sm:px-6">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-bold text-gray-700 truncate">
                                                                        Weight
                                                                    </p>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <p className="flex items-center text-sm font-medium text-gray-500 capitalize">
                                                                        {
                                                                            POKEMON
                                                                                .pokemonDetail
                                                                                .weight
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="block bg-gray-100 hover:bg-gray-200">
                                                            <div className="px-4 py-2 sm:px-6">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-bold text-gray-700 truncate">
                                                                        Moves
                                                                    </p>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <ol className="list-decimal">
                                                                        {Object.values(
                                                                            POKEMON
                                                                                .pokemonDetail
                                                                                .moves
                                                                        )?.map?.(
                                                                            (
                                                                                item,
                                                                                index
                                                                            ) => {
                                                                                return (
                                                                                    <li
                                                                                        className="list-inside items-center text-sm font-medium text-gray-500 capitalize break-words"
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            item
                                                                                                .move
                                                                                                .name
                                                                                        }
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        )}
                                                                    </ol>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="block bg-gray-100 hover:bg-gray-200">
                                                            <div className="px-4 py-2 sm:px-6">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-bold text-gray-700 truncate">
                                                                        Types
                                                                    </p>
                                                                </div>
                                                                <div className="mt-2">
                                                                    <ol className="list-decimal">
                                                                        {Object.values(
                                                                            POKEMON
                                                                                .pokemonDetail
                                                                                .types
                                                                        )?.map?.(
                                                                            (
                                                                                item,
                                                                                index
                                                                            ) => {
                                                                                return (
                                                                                    <li
                                                                                        className="list-inside items-center text-sm font-medium text-gray-500 capitalize break-words"
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            item
                                                                                                .type
                                                                                                .name
                                                                                        }
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        )}
                                                                    </ol>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </span>
                                        <span className="flex justify-center">
                                            <button
                                                className="col-auto inline-flex bg-teal-500 hover:bg-teal-700 focus:outline-none p-3 text-white font-semibold rounded"
                                                onClick={pokeChance}
                                            >
                                                <Support className="h-5 w-5 mr-2 self-center fill-current"></Support>
                                                Throw Poke Ball
                                                <Support className="h-5 w-5 ml-2 self-center fill-current"></Support>
                                            </button>
                                        </span>
                                        {catchPokemon.getPokemon !== null &&
                                            formSubmitNickname()}
                                        <span className="flex justify-center"></span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="m-4 flex flex-col">
                                    <NoData className="object-contain self-center h-24 m-5 md:h-48 w-full"></NoData>
                                    <p className="m-5 text-red-700 text-center text-2xl font-bold">
                                        Data Tidak Tersedia.
                                    </p>
                                </div>
                            </>
                        ))}
                    <div className="ml-5 mr-5">
                        <button
                            className="col-auto inline-flex float-left bg-chocolate-500 hover:bg-chocolate-700 focus:outline-none p-3 mt-14 mb-10 text-white font-semibold rounded"
                            onClick={backHandler}
                        >
                            <ChevronDoubleLeft className="h-5 w-5 mr-1 self-center fill-current"></ChevronDoubleLeft>
                            Back
                        </button>
                    </div>
                </main>
                <Menu
                    showMenu={false}
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

export default withRouter(PokemonDetail);

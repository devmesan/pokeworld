import React from "react";
import { ReactComponent as Home } from "../assets/icons/ic_home.svg";
import { ReactComponent as Collection } from "../assets/icons/ic_collection.svg";

export default function Menu(props) {
    const renderPokemonMenu = () => {
        if (props.canClick === "pokemon") {
            return (
                <>
                    <div
                        className={[
                            "pt-4 pb-4 px-6 inline-flex justify-center text-center font-extrabold text-base text-pacific-400 hover:text-white  bg-gray-100 hover:bg-pacific-300",
                            props.classPokemon,
                        ].join(" ")}
                        onClick={props.methodClick}
                    >
                        <Home className="fill-current w-6 h-6 mr-1 text-pacific-600"></Home>
                        Pokemon
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div
                        className={[
                            "pt-4 pb-4 px-6 inline-flex justify-center text-center font-extrabold text-base text-white bg-pacific-400",
                            props.classPokemon,
                        ].join(" ")}
                    >
                        <Home className="fill-current w-6 h-6 mr-1 text-pacific-600"></Home>
                        Pokemon
                    </div>
                </>
            );
        }
    };
    const renderMyPokemonMenu = () => {
        if (props.canClick === "myPokemon") {
            return (
                <>
                    <div
                        className={[
                            "pt-4 pb-4 px-6 inline-flex justify-center text-center font-extrabold text-base text-pacific-400 hover:text-white bg-gray-100 hover:bg-pacific-300",
                            props.classMyPokemon,
                        ].join(" ")}
                        onClick={props.methodClick}
                    >
                        <Collection className="fill-current w-6 h-6 mr-1 text-pacific-600"></Collection>
                        My Pokemon
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div
                        className={[
                            "pt-4 pb-4 px-6 inline-flex justify-center text-center font-extrabold text-base text-white bg-pacific-400",
                            props.classMyPokemon,
                        ].join(" ")}
                    >
                        <Collection className="fill-current w-6 h-6 mr-1 text-pacific-600"></Collection>
                        My Pokemon
                    </div>
                </>
            );
        }
    };

    return (
        <>
            {props.showMenu === true && (
                <nav>
                    <div className="grid grid-cols-2 divide-x-4 divide-steel-500">
                        {renderPokemonMenu()}
                        {renderMyPokemonMenu()}
                    </div>
                </nav>
            )}
        </>
    );
}

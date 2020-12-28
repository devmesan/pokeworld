import React from "react";
import { ReactComponent as Home } from "../assets/icons/ic_home.svg";
import { ReactComponent as Collection } from "../assets/icons/ic_collection.svg";
import propTypes from "prop-types";

export default function Menu(props) {
    let classActive =
        "pt-4 pb-4 px-6 inline-flex justify-center text-center font-extrabold text-base text-white bg-pacific-400 cursor-default";
    let classInActive =
        "pt-4 pb-4 px-6 inline-flex justify-center text-center font-extrabold text-base text-pacific-400 hover:text-white bg-gray-100 hover:bg-pacific-300 cursor-pointer";

    const renderMenu = () => {
        return (
            <>
                <div
                    className={
                        props.isActive === "menuPokemon"
                            ? classActive
                            : classInActive
                    }
                    onClick={
                        props.isActive === "menuPokemon"
                            ? "#"
                            : props.methodClick
                    }
                >
                    <Home className="fill-current w-6 h-6 mr-1 text-pacific-600"></Home>
                    Pokemon
                </div>
                <div
                    className={
                        props.isActive === "menuMyPokemon"
                            ? classActive
                            : classInActive
                    }
                    onClick={
                        props.isActive === "menuMyPokemon"
                            ? "#"
                            : props.methodClick
                    }
                >
                    <Collection className="fill-current w-6 h-6 mr-1 text-pacific-600"></Collection>
                    My Pokemon
                </div>
            </>
        );
    };

    return (
        <>
            <nav>
                <div className="grid grid-cols-2 divide-x-4 divide-steel-500">
                    {renderMenu()}
                </div>
            </nav>
        </>
    );
}

Menu.propTypes = {
    isActive: propTypes.oneOf(["menuPokemon", "menuMyPokemon"]),
};

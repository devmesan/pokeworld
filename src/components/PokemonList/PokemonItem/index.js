import React from "react";

export default function PokemonItem(props) {
    const pokemonItem = () => {
        if (!props.showNickname) {
            return (
                <>
                    <div
                        className={[
                            "w-6/12 sm:w-8/12 p-2 cursor-pointer bg-gray-200 hover:bg-gray-400",
                            props.className,
                        ].join(" ")}
                        onClick={props.pokemonDetail}
                    >
                        <span
                            className="pokemonName capitalize break-words"
                            id={`pokemon-name-${props.pokemonId}`}
                        >
                            {props.pokemon ? props.pokemon : "-"}
                        </span>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div
                        className={[
                            "w-4/12 sm:w-4/12 p-2 cursor-default bg-gray-200 hover:bg-gray-400",
                            props.className,
                        ].join(" ")}
                    >
                        <span
                            className="pokemonName capitalize break-words"
                            id={`pokemon-name-${props.pokemonId}`}
                        >
                            {props.pokemon ? props.pokemon : "-"}
                        </span>
                    </div>
                    <div
                        className={[
                            "w-4/12 sm:w-5/12 p-2 cursor-default bg-gray-200 hover:bg-gray-400",
                            props.className,
                        ].join(" ")}
                    >
                        <span
                            className="nickname break-words"
                            id={`nickname-${props.pokemonId}`}
                        >
                            {props.nickname ? props.nickname : "-"}
                        </span>
                    </div>
                </>
            );
        }
    };

    return <>{pokemonItem()}</>;
}

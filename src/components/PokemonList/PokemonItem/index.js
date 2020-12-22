import React from "react";
import "./index.scss";

export default function ProductItem(props) {
    return (
        <>
            <div
                className={[
                    "bg-gray-200 hover:bg-gray-400",
                    props.className,
                ].join(" ")}
            >
                <span
                    className="productName"
                    id={`product-name-${props.pokemonId}`}
                >
                    {props.pokemon ? props.pokemon : "-"}
                </span>
            </div>
        </>
    );
}

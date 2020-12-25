import React from "react";

import { ReactComponent as Trash } from "../../../assets/icons/ic_trash.svg";

export default function ActionItem(props) {
    return (
        <>
            <div
                className={["input-item inline-flex", props.className].join(
                    " "
                )}
            >
                <button
                    className="inline-flex items-center py-2 px-1 sm:px-2 bg-mango-500 hover:bg-mango-700 focus:outline-none border border-mango-500 rounded-lg text-white font-bold text-xs"
                    onClick={props.removePokemon}
                >
                    <Trash className="hidden sm:flex h-3 w-3 mr-1 self-center fill-current"></Trash>
                    Release
                </button>
            </div>
        </>
    );
}

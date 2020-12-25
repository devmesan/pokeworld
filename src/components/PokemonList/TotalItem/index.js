import React from "react";

export default function InputItem(props) {
    return (
        <>
            <div className={["inline-flex", props.className].join(" ")}>
                <span className="w-full py-2 bg-gray-200 hover:bg-gray-400 text-red-600 text-center font-extrabold cursor-default">
                    {props.value}
                </span>
            </div>
        </>
    );
}

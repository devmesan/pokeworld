import React from "react";

export default function InputItem(props) {
    const { value, name, productId, min, max } = props;

    const minus = () => {
        if (value > min) {
            props.productRemoved();
            document.addEventListener("click", play("right"), false);
        }
    };

    const plus = () => {
        if (value < max) {
            props.productAdded();
            document.addEventListener("click", play("left"), false);
        }
    };

    return (
        <>
            {props.adjust ? (
                <div
                    className={["input-item inline-flex", props.className].join(
                        " "
                    )}
                >
                    <button
                        className="runSlide py-2 px-2 sm:px-4 bg-red-500 hover:bg-red-700 focus:outline-none border border-red-500 rounded-l-lg text-white font-bold text-xl"
                        onClick={minus}
                    >
                        -
                    </button>
                    <input
                        min={min}
                        max={max}
                        name={name}
                        id={productId}
                        readOnly
                        type="text"
                        value={props.value}
                        className="w-full py-2 bg-gray-200 hover:bg-gray-400 disabled:opacity-75 focus:outline-none text-gray-600 text-center font-extrabold select-none"
                    />
                    <button
                        className="runSlide py-2 px-2 sm:px-4 bg-green-500 hover:bg-green-700  focus:outline-none  border border-green-500 rounded-r-lg text-white font-bold text-xl"
                        onClick={plus}
                    >
                        +
                    </button>
                </div>
            ) : (
                <div
                    className={["input-item inline-flex", props.className].join(
                        " "
                    )}
                >
                    <input
                        min={min}
                        max={max}
                        name={name}
                        id={productId}
                        readOnly
                        type="text"
                        value={props.value}
                        className="w-full py-2 bg-gray-200 hover:bg-gray-400 disabled:opacity-75 focus:outline-none text-red-600 text-center font-extrabold select-none"
                    />
                </div>
            )}
        </>
    );
}

function play(motion = "left") {
    document.querySelector(".box-counter").className = "box-counter";
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            document.querySelector(
                ".box-counter"
            ).className = `box-counter changing-${motion}`;
        });
    });
}

InputItem.defaultProps = {
    min: 0,
    max: 0,
};

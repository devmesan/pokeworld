import React from "react";
import "./index.scss";

export default function Counter(props) {
    return (
        <div className="box-counter">
            <h1
                className="
                            counter
                        "
            >
                {props.counter ? props.counter : 0}
            </h1>
        </div>
    );
}

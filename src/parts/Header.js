import React from "react";

import Counter from "../components/Counter/index";

export default function Header(props) {
    return (
        <header className="site-header p-6 mb-4 rounded-b-3xl bg-blue-600 text-center text-white text-4xl font-extrabold">
            Pokemon World
            {/* <Counter counter={props.counter}></Counter> */}
        </header>
    );
}

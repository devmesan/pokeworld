import React from "react";
import { ReactComponent as Globe } from "../assets/icons/ic_globe.svg";

export default function Header(props) {
    return (
        <header className="site-header inline-flex justify-center p-6 mb-4 rounded-b-3xl bg-blue-600">
            <h1 className="text-white text-4xl font-extrabold">
                Pokemon World
            </h1>
            <Globe className="h-9 w-9 ml-2 self-center fill-current text-white"></Globe>
        </header>
    );
}

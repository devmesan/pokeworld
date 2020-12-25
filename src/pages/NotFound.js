import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/images/notfound.jpg";

export default function NotFound() {
    useEffect(() => {
        document.title = "Poke World || Not Found Page";
        window.scroll(0, 0);
    }, []);

    return (
        <section className="flex flex-col items-center h-screen">
            <img
                className="object-contain h-56 md:h-full w-full"
                src={notfound}
                alt="Oops we lost you"
            />
            <h1 className="text-3xl text-gray-800 font-bold">
                Opps! We're lost
            </h1>
            <p className="mx-auto mt-4 text-lg text-center text-gray-600 mtb-8 lg:w-3/12 xl:w-2/12 font-semibold">
                The page that you requested is not found in our system.
            </p>
            <Link
                className="px-6 py-3 mt-5 text-white transition-all duration-200 bg-red-400 shadow-inner hover:bg-red-500 focus:outline-none font-medium rounded"
                to="/"
            >
                Back to Home
            </Link>
        </section>
    );
}

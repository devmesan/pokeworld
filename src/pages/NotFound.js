import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UndrawCompleteTask } from "../assets/images/completion_task.svg";

export default function NotFound() {
    useEffect(() => {
        document.title = "Poke World || Not Found Page";
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <div className="h-screen w-screen bg-gray-200 flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-center px-24 text-gray-700">
                    <div className="max-w-md">
                        <div className="text-5xl font-dark font-bold">404</div>
                        <p className="text-2xl md:text-3xl font-light leading-normal">
                            Sorry we couldn't find this page.{" "}
                        </p>
                        <p className="mb-8">
                            But dont worry, you can find plenty of other things
                            on our homepage.
                        </p>

                        <Link
                            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-cerulean-600 active:bg-cerulean-600 hover:bg-cerulean-700"
                            to={{
                                pathname: "/",
                                hash: "#",
                            }}
                        >
                            back to homepage
                        </Link>
                    </div>
                    <div className="max-w-lg">
                        <UndrawCompleteTask className="object-contain h-56 m-5 md:h-full w-full"></UndrawCompleteTask>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from "react";

export default function Loading() {
    return (
        <>
            <section className="z-10 flex flex-col justify-center items-center h-screen">
                <h1 className="animate-pulse ease duration-500 mt-12 text-3xl text-gray-900">
                    Please wait ...
                </h1>
            </section>
        </>
    );
}

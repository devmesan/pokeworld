import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
    if (error) {
        let message;
        if (!navigator.onLine) {
            message = <div>Please check your internet connection.</div>;

            toast.error(message);

            return Promise.reject(error);
        } else if (error.response) {
            message = (
                <div>
                    {error.response.status} {error.response.statusText} <br /> [
                    {error.response.data.message}]
                </div>
            );

            toast.error(message);

            return Promise.reject(error);
        }
    }
}

export default errorResponseHandler;

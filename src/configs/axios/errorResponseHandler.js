import { alertApp } from "../../store/utility";

function errorResponseHandler(error) {
    if (error) {
        let message, mode;
        if (!navigator.onLine) {
            message = "Please check your <b>Internet Connection</>";
            mode = {
                autoClose: 3000,
                hideProgressBar: true,
            };
            alertApp("error", message, mode);

            return Promise.reject(error);
        } else if (error.response) {
            message = `
                        [${error.response.status}] ${error.response.data}
                    `;
            mode = {
                autoClose: 3000,
                hideProgressBar: true,
            };
            alertApp("error", message, mode);

            return Promise.reject(error);
        }
    }
}

export default errorResponseHandler;

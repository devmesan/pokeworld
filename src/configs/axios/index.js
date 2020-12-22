import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_H0ST}`,
});

instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
);

export default instance;

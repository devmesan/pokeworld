import axios from "../../configs/axios";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    getProduct: () => axios.get("/todos"),
    saveProduct: (data) => axios.post("/posts", data),
};

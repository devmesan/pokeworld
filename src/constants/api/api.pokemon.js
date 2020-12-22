import axios from "../../configs/axios";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    getPokemon: (url = "/pokemon") => axios.get(`${url}`),
    getPokemonDetail: (id) => axios.get(`/pokemon/${id}`),
};

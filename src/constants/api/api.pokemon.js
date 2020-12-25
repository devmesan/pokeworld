import axios from "../../configs/axios";

const apiPokemon = {
    getPokemon: (url = "/pokemon") => axios.get(`${url}`),
    getPokemonDetail: (id) => axios.get(`/pokemon/${id}`),
};

export default apiPokemon;

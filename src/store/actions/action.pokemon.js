import * as actionTypesPokemon from "../types/type.pokemon";
import pokemon from "../../constants/api/api.pokemon";

export const fetchPokemons = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_LIST,
        payload: payload,
    };
};

export const fetchPokemonsSuccess = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_LIST_SUCCESS,
        message: payload.message,
        count: payload.data.count,
        next: payload.data.next,
        url: payload.url,
        previous: payload.data.previous,
        pokemons: payload.data.results,
    };
};

export const fetchPokemonsFailed = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_LIST_FAILED,
        message: payload.message,
    };
};

export const initPokemon = (payload) => {
    const { url } = payload;
    return (dispatch) => {
        dispatch(fetchPokemons());
        pokemon
            .getPokemon(url)
            .then((response) => {
                console.log(response);
                let payload = {
                    message: "Berhasil Mengunduh Data",
                    data: response.data,
                    url: url,
                };
                dispatch(fetchPokemonsSuccess(payload));
            })
            .catch((error) => {
                console.log(error);
                let payload = {
                    message:
                        "Gagal Mengunduh Data, silahkan coba beberapa saat lagi",
                };
                dispatch(fetchPokemonsFailed(payload));
            });
    };
};

export const fetchSinglePokemon = (data) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_DETAILS,
        payload: data,
    };
};

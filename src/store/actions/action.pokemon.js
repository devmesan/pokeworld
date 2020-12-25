import * as actionTypesPokemon from "../types/type.pokemon";
import pokemon from "../../constants/api/api.pokemon";

export const changeHomePage = (payload) => {
    return {
        type: actionTypesPokemon.CHANGE_HOME_PAGE,
        url: payload.url,
    };
};

export const detailPokemonId = (payload) => {
    return {
        type: actionTypesPokemon.CHANGE_DETAIL_POKEMON_ID,
        pokemonId: payload.pokemonId,
    };
};

export const fetchPokemons = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_LIST,
        payload: payload,
    };
};

export const fetchPokemonsSuccess = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_LIST_SUCCESS,
        pokemonCollection: payload.pokemonCollection,
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
    const { url, pokemonCollection } = payload;
    return (dispatch) => {
        dispatch(fetchPokemons());
        pokemon
            .getPokemon(url)
            .then((response) => {
                let payload = {
                    message: "Berhasil mengunduh data",
                    data: response.data,
                    url: url,
                    pokemonCollection: pokemonCollection,
                };
                dispatch(fetchPokemonsSuccess(payload));
            })
            .catch((error) => {
                let payload = {
                    message:
                        "Gagal mengunduh data, silahkan coba beberapa saat lagi",
                };
                dispatch(fetchPokemonsFailed(payload));
            });
    };
};

export const fetchDetailPokemon = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_DETAILS,
        payload: payload,
    };
};

export const fetchDetailPokemonSuccess = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_DETAILS_SUCCESS,
        message: payload.message,
        data: payload.data,
        pokemonId: payload.pokemonId,
    };
};

export const fetchDetailPokemonFailed = (payload) => {
    return {
        type: actionTypesPokemon.FETCH_POKEMON_DETAILS_FAILED,
        message: payload.message,
    };
};

export const initDetailPokemon = (payload) => {
    const { pokemonId } = payload;
    if (parseInt(pokemonId) < 1) {
        return (dispatch) => {
            dispatch(fetchDetailPokemon());
            let payload = {
                message:
                    "Gagal data tidak valid, silahkan kembali ke halaman home terlebih dahulu untuk memilih Pokemon ulang",
            };
            dispatch(fetchDetailPokemonFailed(payload));
        };
    }
    return (dispatch) => {
        dispatch(fetchDetailPokemon());
        pokemon
            .getPokemonDetail(pokemonId)
            .then((response) => {
                let payload = {
                    message: "Berhasil mengunduh data",
                    data: response.data,
                    pokemonId: response.data.id,
                };
                dispatch(fetchDetailPokemonSuccess(payload));
            })
            .catch((error) => {
                let payload = {
                    message:
                        "Gagal mengunduh data, silahkan coba beberapa saat lagi",
                };
                dispatch(fetchDetailPokemonFailed(payload));
            });
    };
};

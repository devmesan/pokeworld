import * as actionTypesMyPokemon from "../types/type.mypokemon";
import { alert } from "../utility";

export const savePokemon = () => {
    return {
        type: actionTypesMyPokemon.SAVE_POKEMON,
    };
};

export const savePokemonSuccess = (payload) => {
    return {
        type: actionTypesMyPokemon.SAVE_POKEMON_SUCCESS,
        message: payload.message,
        pokemonId: payload.pokemonId,
        name: payload.name,
        nickname: payload.nickname,
    };
};

export const savePokemonFailed = () => {
    return {
        type: actionTypesMyPokemon.SAVE_POKEMON_FAILED,
    };
};

export const savePokemonProcess = (payload) => {
    const { pokemonId, name, nickname } = payload;
    return (dispatch) => {
        dispatch(savePokemon());
        try {
            let payload = {
                message:
                    "<b>Selamat</b> data Pokemon <b>" +
                    name +
                    "</b> anda, dengan Nickname <b>" +
                    nickname +
                    "</b> telah berhasil disimpan.",
                pokemonId: pokemonId,
                name: name,
                nickname: nickname,
            };
            dispatch(savePokemonSuccess(payload));
            let mode;
            mode = {
                autoClose: 3000,
                hideProgressBar: true,
            };
            alert("success", payload.message, mode);
        } catch (error) {
            let payload = {
                message:
                    "Gagal Simpan data Pokemon, silahkan coba beberapa saat lagi",
            };

            dispatch(savePokemonFailed(payload));
        }
    };
};

export const fetchMyPokemonList = (payload) => {
    return {
        type: actionTypesMyPokemon.FETCH_MY_POKEMON_LIST,
        payload: payload,
    };
};

export const fetchMyPokemonListSuccess = (payload) => {
    return {
        type: actionTypesMyPokemon.FETCH_MY_POKEMON_LIST_SUCCESS,
        message: payload.message,
    };
};

export const fetchMyPokemonListFailed = (payload) => {
    return {
        type: actionTypesMyPokemon.FETCH_MY_POKEMON_LIST_FAILED,
        message: payload.message,
    };
};

export const fetchMyPokemonListProcess = () => {
    return (dispatch) => {
        dispatch(fetchMyPokemonList());
        try {
            let payload = {
                message: "Berhasil mengunduh data",
            };
            dispatch(fetchMyPokemonListSuccess(payload));
        } catch (error) {
            let payload = {
                message:
                    "Gagal mengunduh data, silahkan coba beberapa saat lagi",
            };
            dispatch(fetchMyPokemonListFailed(payload));
        }
    };
};

export const removePokemon = (payload) => {
    return {
        type: actionTypesMyPokemon.REMOVE_POKEMON,
        payload: payload,
    };
};

export const removePokemonSuccess = (payload) => {
    return {
        type: actionTypesMyPokemon.REMOVE_POKEMON_SUCCESS,
        message: payload.message,
        pokemonId: payload.pokemonId,
        name: payload.name,
        nickname: payload.nickname,
    };
};

export const removePokemonFailed = (payload) => {
    return {
        type: actionTypesMyPokemon.REMOVE_POKEMON_FAILED,
        message: payload.message,
    };
};

export const removePokemonProcess = (payload) => {
    const { pokemonId, name, nickname } = payload;
    return (dispatch) => {
        dispatch(removePokemon());
        try {
            let payload = {
                message:
                    "<b>Berhasil</b> Hapus data Pokemon <b>" +
                    name +
                    "</b> dengan Nickname <b>" +
                    nickname +
                    "</b>",
                pokemonId: pokemonId,
                name: name,
                nickname: nickname,
            };
            dispatch(removePokemonSuccess(payload));
            let mode;
            mode = {
                autoClose: 3000,
                hideProgressBar: true,
            };
            alert("success", payload.message, mode);
        } catch (error) {
            let payload = {
                message:
                    "Gagal Hapus data Pokemon, silahkan coba beberapa saat lagi",
            };
            dispatch(removePokemonFailed(payload));
        }
    };
};

export const removeAllPokemon = (payload) => {
    return {
        type: actionTypesMyPokemon.REMOVE_ALL_POKEMON,
        payload: payload,
    };
};

export const removeAllPokemonSuccess = (payload) => {
    return {
        type: actionTypesMyPokemon.REMOVE_ALL_POKEMON_SUCCESS,
        message: payload.message,
    };
};

export const removeAllPokemonFailed = (payload) => {
    return {
        type: actionTypesMyPokemon.REMOVE_ALL_POKEMON_FAILED,
        message: payload.message,
    };
};

export const removeAllPokemonProcess = () => {
    return (dispatch) => {
        dispatch(removeAllPokemon());
        try {
            let payload = {
                message: "Berhasil Hapus <b>Semua data Pokemon</b>",
            };
            dispatch(removeAllPokemonSuccess(payload));
            let mode;
            mode = {
                autoClose: 3000,
                hideProgressBar: true,
            };
            alert("success", payload.message, mode);
        } catch (error) {
            let payload = {
                message:
                    "Gagal Hapus Semua data Pokemon, silahkan coba beberapa saat lagi",
            };
            dispatch(removeAllPokemonFailed(payload));
        }
    };
};

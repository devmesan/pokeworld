import * as actionTypesMyPokemon from "../types/type.mypokemon";
import { operatePokemon, updateObject } from "../utility";

const initialState = {
    pokemonCollection: [],
    ownPokemon: [],
    totalPokemonCollection: 0,
    totalOwnPokemon: 0,
    loading: true,
    message: null,
    error: false,
};

const savePokemon = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: "",
    });
};

const savePokemonSuccess = (state, action) => {
    let pokemonCollectionNew = {
        pokemonId: action.pokemonId,
        name: action.name,
        quantity: 1,
    };
    let pokemonCollection = operatePokemon(
        state.pokemonCollection,
        pokemonCollectionNew,
        "add"
    );
    let totalPokemonCollection = pokemonCollection.length;
    let ownPokemon = state.ownPokemon;
    let payload = {
        pokemonId: action.pokemonId,
        name: action.name,
        nickname: action.nickname,
    };
    ownPokemon.push(payload);
    return updateObject(state, {
        pokemonCollection: pokemonCollection,
        ownPokemon: ownPokemon,
        totalPokemonCollection: totalPokemonCollection,
        totalOwnPokemon: state.totalOwnPokemon + 1,
        loading: false,
        message: action.message,
        error: false,
    });
};

const savePokemonFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        error: true,
    });
};

const fetchMyPokemonList = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: "",
    });
};

const fetchMyPokemonListSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        error: false,
    });
};

const fetchMyPokemonListFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        error: true,
    });
};

const removePokemon = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: "",
    });
};

const removePokemonSuccess = (state, action) => {
    let pokemonCollectionRemove = {
        pokemonId: action.pokemonId,
        name: action.name,
        quantity: 1,
    };
    let pokemonCollection = operatePokemon(
        state.pokemonCollection,
        pokemonCollectionRemove,
        "remove"
    );
    const ownPokemon = state.ownPokemon.filter(
        (el) => el.nickname !== action.nickname
    );
    let totalOwnPokemon = state.totalOwnPokemon - 1;
    let totalPokemonCollection = pokemonCollection.length;
    return updateObject(state, {
        pokemonCollection: pokemonCollection,
        ownPokemon: ownPokemon,
        totalPokemonCollection: totalPokemonCollection,
        totalOwnPokemon: totalOwnPokemon,
        loading: false,
        message: action.message,
        error: false,
    });
};

const removePokemonFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        error: true,
    });
};

const removeAllPokemon = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: "",
    });
};

const removeAllPokemonSuccess = (state, action) => {
    return updateObject(state, {
        pokemonCollection: [],
        ownPokemon: [],
        totalOwnPokemon: 0,
        totalPokemonCollection: 0,
        loading: false,
        message: action.message,
        error: false,
    });
};

const removeAllPokemonFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        error: true,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypesMyPokemon.SAVE_POKEMON:
            return savePokemon(state, action);
        case actionTypesMyPokemon.SAVE_POKEMON_SUCCESS:
            return savePokemonSuccess(state, action);
        case actionTypesMyPokemon.SAVE_POKEMON_FAILED:
            return savePokemonFailed(state, action);
        case actionTypesMyPokemon.FETCH_MY_POKEMON_LIST:
            return fetchMyPokemonList(state, action);
        case actionTypesMyPokemon.FETCH_MY_POKEMON_LIST_SUCCESS:
            return fetchMyPokemonListSuccess(state, action);
        case actionTypesMyPokemon.FETCH_MY_POKEMON_LIST_FAILED:
            return fetchMyPokemonListFailed(state, action);
        case actionTypesMyPokemon.REMOVE_POKEMON:
            return removePokemon(state, action);
        case actionTypesMyPokemon.REMOVE_POKEMON_SUCCESS:
            return removePokemonSuccess(state, action);
        case actionTypesMyPokemon.REMOVE_POKEMON_FAILED:
            return removePokemonFailed(state, action);
        case actionTypesMyPokemon.REMOVE_ALL_POKEMON:
            return removeAllPokemon(state, action);
        case actionTypesMyPokemon.REMOVE_ALL_POKEMON_SUCCESS:
            return removeAllPokemonSuccess(state, action);
        case actionTypesMyPokemon.REMOVE_ALL_POKEMON_FAILED:
            return removeAllPokemonFailed(state, action);
        default:
            return state;
    }
};

export default reducer;

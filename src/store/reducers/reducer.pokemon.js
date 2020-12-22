import * as actionTypesPokemon from "../types/type.pokemon";
import { updateObject } from "../utility";

const initialState = {
    loading: true,
    SelectedPokemonLoading: true,
    message: null,
    total: 0,
    pokemons: [],
    selectedPokemon: {},
    url: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: null,
    prevUrl: null,
    currentPage: 1,
    error: false,
};

const fetchPokemons = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: "",
    });
};

const fetchPokemonsSuccess = (state, action) => {
    return updateObject(state, {
        count: action.count,
        pokemons: action.pokemons.map((o) => {
            o.totalOwnPokemon = 0;
            return o;
        }),
        nextUrl: action.next,
        prevUrl: action.previous,
        url: action.url,
        message: action.message,
        error: false,
        loading: false,
    });
};

const fetchPokemonsFailed = (state, action) => {
    return updateObject(state, {
        status: "error",
        message: action.message,
        loading: false,
        error: true,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypesPokemon.FETCH_POKEMON_LIST:
            return fetchPokemons(state, action);
        case actionTypesPokemon.FETCH_POKEMON_LIST_SUCCESS:
            return fetchPokemonsSuccess(state, action);
        case actionTypesPokemon.FETCH_POKEMON_LIST_FAILED:
            return fetchPokemonsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;

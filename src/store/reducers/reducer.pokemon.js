import * as actionTypesPokemon from "../types/type.pokemon";
import { parsedUrl, updateObject } from "../utility";

const initialState = {
    totalPage: 0,
    pokemons: [],
    url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=25",
    urlFirstPage: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=25",
    offset: 0,
    limit: 0,
    nextUrl: null,
    prevUrl: null,
    currentPage: 1,
    firstPage: 1,
    lastPage: 1,
    startNumPokemon: 0,
    endNumPokemon: 0,
    viewDetailPokemonId: 0,
    pokemonDetailId: 0,
    pokemonDetail: {},
    error: false,
    loading: true,
    message: null,
    totalPokemon: 0,
};

const changeHomePage = (state, action) => {
    return updateObject(state, {
        url: action.url,
    });
};

const changeDetailPokemonId = (state, action) => {
    return updateObject(state, {
        viewDetailPokemonId: action.pokemonId,
    });
};

const fetchPokemons = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: "",
    });
};

const fetchPokemonsSuccess = (state, action) => {
    let pokemons,
        url,
        currentPage,
        lastPage,
        offset,
        limit,
        startNumPokemon,
        endNumPokemon;

    pokemons = action.pokemons.map((o) => {
        o.totalOwnPokemon = 0;
        o.pokemonId = parsedUrl(o.url, "split", 4);
        return o;
    });
    if (action.pokemonCollection.length > 0) {
        action.pokemonCollection.forEach((element) => {
            const i = pokemons.findIndex(
                (_item) => _item.pokemonId === element.pokemonId
            );
            if (i > -1) {
                pokemons[i].totalOwnPokemon = element.quantity;
            }
        });
    }
    if (action.next !== null && action.previous !== null) {
        url = new URL(action.next);
    } else if (action.next === null) {
        url = new URL(action.previous);
    } else if (action.previous === null) {
        url = new URL(action.next);
    }
    offset = url.searchParams.get("offset");
    limit = url.searchParams.get("limit");
    startNumPokemon = offset - limit;
    endNumPokemon = offset;
    if (startNumPokemon === 0) {
        currentPage = state.firstPage;
    } else if (parseInt(offset) > parseInt(state.offset)) {
        currentPage = state.currentPage + 1;
    } else {
        currentPage = state.currentPage - 1;
    }
    lastPage = Math.ceil(parseFloat(action.count) / parseFloat(limit));
    return updateObject(state, {
        pokemons: pokemons,
        nextUrl: action.next,
        prevUrl: action.previous,
        url: action.url,
        currentPage: currentPage,
        lastPage: lastPage,
        offset: offset,
        limit: limit,
        totalPage: action.pokemons.length,
        totalPokemon: action.count,
        startNumPokemon: startNumPokemon + 1,
        endNumPokemon: endNumPokemon,
        loading: false,
        message: action.message,
        error: false,
    });
};

const fetchPokemonsFailed = (state, action) => {
    return updateObject(state, {
        message: action.message,
        loading: false,
        error: true,
    });
};

const fetchDetailPokemon = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: "",
    });
};

const fetchDetailPokemonSuccess = (state, action) => {
    return updateObject(state, {
        pokemonDetailId: action.pokemonId,
        pokemonDetail: action.data,
        loading: false,
        message: action.message,
        error: false,
    });
};

const fetchDetailPokemonFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        error: true,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypesPokemon.CHANGE_HOME_PAGE:
            return changeHomePage(state, action);
        case actionTypesPokemon.CHANGE_DETAIL_POKEMON_ID:
            return changeDetailPokemonId(state, action);
        case actionTypesPokemon.FETCH_POKEMON_LIST:
            return fetchPokemons(state, action);
        case actionTypesPokemon.FETCH_POKEMON_LIST_SUCCESS:
            return fetchPokemonsSuccess(state, action);
        case actionTypesPokemon.FETCH_POKEMON_LIST_FAILED:
            return fetchPokemonsFailed(state, action);
        case actionTypesPokemon.FETCH_POKEMON_DETAILS:
            return fetchDetailPokemon(state, action);
        case actionTypesPokemon.FETCH_POKEMON_DETAILS_SUCCESS:
            return fetchDetailPokemonSuccess(state, action);
        case actionTypesPokemon.FETCH_POKEMON_DETAILS_FAILED:
            return fetchDetailPokemonFailed(state, action);
        default:
            return state;
    }
};

export default reducer;

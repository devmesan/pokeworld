import * as actionTypesMyPokemon from "../types/type.mypokemon";
import { updateObject } from "../utility";

const initialState = {
    loading: true,
    message: null,
    pokemons: [],
    totalOwnPokemon: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;

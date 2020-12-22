import { combineReducers } from "redux";
import pokemon from "./reducer.pokemon";
import mypokemon from "./reducer.mypokemon";

export default combineReducers({
    pokemon,
    mypokemon,
});

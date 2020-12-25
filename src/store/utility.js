import parse from "html-react-parser";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const alertApp = (type = "default", message, mode) => {
    let messageParse, options;
    messageParse = <div>{parse(message)}</div>;
    options = {
        ...mode,
        transition: Slide,
    };

    const toastDefault = (options) => {
        toast.default(messageParse, options);
    };
    const toastInfo = (options) => {
        toast.info(messageParse, options);
    };
    const toastSuccess = (options) => {
        toast.success(messageParse, options);
    };
    const toastWarning = (options) => {
        toast.warning(messageParse, options);
    };
    const toastError = (options) => {
        toast.error(messageParse, options);
    };
    const toastDark = (options) => {
        toast.dark(messageParse, options);
    };

    switch (type) {
        case "default":
            toastDefault(options);
            break;
        case "info":
            toastInfo(options);
            break;
        case "success":
            toastSuccess(options);
            break;
        case "warning":
            toastWarning(options);
            break;
        case "error":
            toastError(options);
            break;
        case "dark":
            toastDark(options);
            break;
        default:
            return false;
    }
};

export const sumPropertyValue = (items, prop) =>
    items.reduce((a, b) => a + b[prop], 0);
export const operatePokemon = (myPokemon, pokemon, method = "add") => {
    if (method === "validate") {
        // let i = -1;
        // for (let index = 0; index < myPokemon.length; ++index) {
        //     if (
        //         myPokemon[index].nickname.toString().toLowerCase() ===
        //         pokemon.nickname.toString().toLowerCase()
        //     ) {
        //         i = index;
        //         break;
        //     }
        // }
        const i = myPokemon.findIndex(
            (_item) =>
                _item.nickname.toString().toLowerCase() ===
                pokemon.nickname.toString().toLowerCase()
        );
        let payload = {
            resValidate: true,
            name: "",
            message: "",
        };
        if (i > -1) {
            payload.resValidate = true;
            payload.name = myPokemon[i].name;
            payload.message =
                "Nickname Already taken with Pokemon " +
                myPokemon[i].name.replace(/\w\S*/g, (w) =>
                    w.replace(/^\w/, (c) => c.toUpperCase())
                );
        } else {
            payload.resValidate = false;
            payload.name = pokemon.name;
            payload.message =
                "Nickname with " +
                pokemon.nickname.replace(/\w\S*/g, (w) =>
                    w.replace(/^\w/, (c) => c.toUpperCase())
                ) +
                " available";
        }
        return payload;
    } else {
        // let i = -1;
        // for (let index = 0; index < myPokemon.length; ++index) {
        //     if (myPokemon[index].pokemonId === pokemon.pokemonId) {
        //         i = index;
        //         break;
        //     }
        // }
        const i = myPokemon.findIndex(
            (_item) => _item.pokemonId === pokemon.pokemonId
        );
        if (method === "add") {
            if (i > -1) {
                myPokemon[i].quantity += pokemon.quantity;
            } else {
                myPokemon.push(pokemon);
            }
        } else if (method === "remove") {
            if (i > -1) {
                myPokemon[i].quantity -= pokemon.quantity;
                if (myPokemon[i].quantity === 0) {
                    myPokemon.splice(i, 1);
                }
            }
        }
        return myPokemon;
    }
};

export const parsedUrl = (url, typeMethod = "split", subs = 0) => {
    let urlParsed = new URL(url);
    let resPath;
    if (typeMethod === "substring") {
        resPath = urlParsed.pathname.substring(subs);
        return resPath;
    } else if (typeMethod === "split") {
        resPath = urlParsed.pathname.split("/");
        return resPath[subs] ? resPath[subs] : "doesn't exist value";
    }
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

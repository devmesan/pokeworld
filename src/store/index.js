import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

const middleware = [thunk];

const persistConfig = {
    key: "root",
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const devTools =
        process.env.NODE_ENV === "production"
            ? applyMiddleware(...middleware)
            : compose(
                  applyMiddleware(...middleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__
                      ? window.__REDUX_DEVTOOLS_EXTENSION__()
                      : (f) => f
              );

    let store = createStore(persistedReducer, initialState, devTools);

    let persistor = persistStore(store);
    return { store, persistor };
};

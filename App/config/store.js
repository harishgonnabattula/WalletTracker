import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger";
import reducers from "../reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleWare = [];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWare)
);
export const persistor = persistStore(store);

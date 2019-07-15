import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunkMiddleware from "redux-thunk";
import {
    apiMiddleware
} from 'redux-api-middleware';
import appReducer from '../reducers';
import apiAuthInjector from '../middlewares/apiAuthInjector';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import initialState from '../reducers/InitialState';
import constants from '../constants';
import RSAA from 'redux-api-middleware/lib/RSAA';

function verifySession() {
    AsyncStorage.getItem(constants.TOKEN).then(function (token) {
        if (!token) {
            return true;
        }
    })
}
function rootReducer(state, action) {
    if (action.type == constants.LOGOUT) {
        state = {};
    }
    return appReducer(state, action)
}

const enhancers = compose(applyMiddleware(
    thunkMiddleware,
    apiAuthInjector,
    apiMiddleware
), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

const persistConfig = {
    key: 'estate-manager',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    let store = createStore(
        persistedReducer,
        initialState,
        enhancers
    )
    let persistor = persistStore(store)
    if (module.hot) {
        module.hot.accept(() => {
            // This fetch the new state of the above reducers.
            const nextRootReducer = require('../reducers')
            store.replaceReducer(
                persistReducer(persistConfig, nextRootReducer)
            )
        })
    }
    return { store, persistor };
}

export default configureStore;
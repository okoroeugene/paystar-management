import {
    RSAA
} from 'redux-api-middleware'
import constants from '../constants';

export default store => next => action => {
    if (!store.getState().user.authenticated) {
        return next(action);
    }

    const rsaa = action[RSAA];
    if (rsaa) {
        var token = localStorage.getItem("b94adbeef9ad48d8a147f576246544e7");
        if (!token) return next(action);
        if (rsaa.headers["Authorization"]) {
            return next(action);
        }
        rsaa.headers = Object.assign({}, rsaa.headers, {
            "b94adbeef9ad48d8a147f576246544e7": `${token}` || 'mesage'
        });
    }
    return next(action);
};
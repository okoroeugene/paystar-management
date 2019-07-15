import constants from '../constants';
import {
    CALL_API,
    RSAA
} from 'redux-api-middleware';
import store from '../stores/index';
import Axios from 'axios';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const doLogin = credentials => {
    return (dispatch) => {
        dispatch({ type: constants.REQUEST(constants.AUTH_USER) })
        Axios.post(`${API_URL}/api/login`, credentials)
            .then(result => {
                if (result.headers) {
                    // console.log(result.headers)
                    // cookies.set(Object.keys(result.headers)[0], Object.values(result.headers)[0], { path: '/' });
                    // setCookie(Object.keys(result.headers)[0], Object.values(result.headers)[0], { path: '/' });
                    dispatch({
                        type: constants.REQUEST_SUCCESS(constants.AUTH_USER),
                        payload: {
                            credentials: result.data
                        }
                    })
                    localStorage.setItem(Object.keys(result.headers)[0], Object.values(result.headers)[0]);
                    // window.location.href = '/dashboard';
                }
            })
            .catch((err) => {
                dispatch({
                    type: constants.REQUEST_FAILURE(constants.AUTH_USER),
                    error: err
                })
            })
    }
};

// export const doLogin = credentials => ({
//     [RSAA]: {
//         endpoint: `${API_URL}/api/login`,
//         method: 'POST',
//         types: [
//             constants.REQUEST(constants.AUTH_USER),
//             {
//                 type: constants.REQUEST_SUCCESS(constants.AUTH_USER),
//                 payload: (action, state, response) => response.json().then(credentials => {
//                     return {
//                         credentials
//                     }
//                 })
//             },
//             {
//                 type: constants.REQUEST_FAILURE(constants.AUTH_USER),
//                 meta: (action, state, res) => {
//                     return {
//                         status: res.status,
//                         message: res.message
//                     };
//                 }
//             }
//         ],
//         body: JSON.stringify(credentials),
//         options: { timeout: 60000 },
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     }
// })

export const logOut = _ => {
    return (dispatch) => {
        dispatch({ type: constants.LOGOUT })
    }
}
import constants from '../constants';
import {
    CALL_API,
    RSAA
} from 'redux-api-middleware';
import Axios from 'axios';
// import store from '../stores/index';

export const loggedInUser = _ => ({
    [RSAA]: {
        endpoint: `${API_URL}/api/loggedinuser`,
        method: 'GET',
        types: [
            constants.REQUEST(constants.CURRENT_USER),
            {
                type: constants.REQUEST_SUCCESS(constants.CURRENT_USER),
                payload: (action, state, response) => response.json().then(credentials => {
                    return {
                        credentials
                    }
                })
            },
            {
                type: constants.REQUEST_FAILURE(constants.CURRENT_USER),
                meta: (action, state, res) => {
                    return {
                        status: res.status,
                        message: res.message
                    };
                }
            }
        ],
        options: { timeout: 60000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }
});

export const fetchUsers = _ => ({
    // Axios.get(`${API_URL}/api/users`, {
    //     withCredentials: true
    // })
    //     .then((response) => {
    //         console.log("------data here-----------")
    //         console.log(response.data);
    //     })
    [RSAA]: {
        endpoint: `${API_URL}/api/users`,
        method: 'GET',
        types: [
            constants.REQUEST(constants.LIST_USERS),
            {
                type: constants.REQUEST_SUCCESS(constants.LIST_USERS),
                payload: (action, state, response) => response.json().then(users => {
                    console.log(users)
                    return {
                        users
                    }
                })
            },
            {
                type: constants.REQUEST_FAILURE(constants.LIST_USERS),
                meta: (action, state, res) => {
                    return {
                        status: res.status,
                        message: res.message
                    };
                }
            }
        ],
        options: { timeout: 60000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: 'include'
    }
});

export const logout = _ => ({
    [RSAA]: {
        endpoint: `${API_URL}/api/logout`,
        method: 'GET',
        types: [
            constants.REQUEST(constants.LOGOUT),
            {
                type: constants.REQUEST_SUCCESS(constants.LOGOUT),
                payload: (action, state, response) => response.json().then(result => {
                    alert("Logged Out")
                })
            }
        ],
        options: { timeout: 60000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }
})
import constants from '../constants';
import {
    CALL_API,
    RSAA
} from 'redux-api-middleware';

export const doRegister = details => ({
    [RSAA]: {
        endpoint: `${API_URL}/api/users`,
        method: 'POST',
        types: [
            constants.REQUEST(constants.REGISTER),
            {
                type: constants.REQUEST_SUCCESS(constants.REGISTER),
                payload: (action, state, response) => response.json().then(credentials => (console.log(credentials), {
                    credentials
                }))
            },
            {
                type: constants.REQUEST_FAILURE(constants.REGISTER),
                meta: (action, state, res) => {
                    if (res) {
                        return {
                            status: res.status
                        };
                    } else {
                        return {
                            status: 'Network request failed'
                        }
                    }
                }
            }
        ],
        body: JSON.stringify(details),
        options: { timeout: 10000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }
});
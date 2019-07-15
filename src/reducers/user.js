import constants from '../constants';
let initialState = {
    isAuthenticated: false
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case constants.REQUEST(constants.NEW_USER):
            return Object.assign({}, state, {
                created: false,
                error: undefined
            })
        case constants.REQUEST_SUCCESS(constants.NEW_USER):
            return {
                ...state,
                created: true
            };
        case constants.REQUEST_FAILURE(constants.NEW_USER):
            return Object.assign({}, state, {
                error: `An error occured due to ${action.payload.message}`,
                created: false
            })
        case constants.REQUEST(constants.AUTH_USER):
            return Object.assign({}, state, {
                authenticated: false,
                error: undefined
            })
        case constants.REQUEST_SUCCESS(constants.AUTH_USER):
            if (action.payload.credentials.status == 403 || action.payload.credentials.status == 404) {
                return {
                    ...state,
                    error: action.payload.credentials.message
                }
            } else {
                localStorage.setItem(constants.TOKEN, action.payload.token);
                return {
                    ...state,
                    authenticated: true,
                    current: action.payload.credentials.payload.user
                };
            }
        case constants.REQUEST_FAILURE(constants.AUTH_USER):
            return Object.assign({}, state, {
                error: `An error occured due to ${action.payload.message}`,
                authenticated: false
            })
        case constants.REQUEST(constants.CURRENT_USER):
            return Object.assign({}, state, {})
        case constants.REQUEST_SUCCESS(constants.CURRENT_USER):
            return {
                ...state,
                current: action.payload.user
            }
        case constants.REQUEST_FAILURE(constants.CURRENT_USER):
            return Object.assign({}, state, {
                error: `Login failed due to ${action.payload.error}`
            })
        case constants.REQUEST(constants.LIST_USERS):
            return Object.assign({}, state, {})
        case constants.REQUEST_SUCCESS(constants.LIST_USERS):
            return {
                ...state,
                users: action.payload.users
            }
        case constants.REQUEST_FAILURE(constants.LIST_USERS):
            return Object.assign({}, state, {
                error: `Login failed due to ${action.payload.error}`
            })
        case constants.REQUEST(constants.LOGOUT):
            return Object.assign({}, state, {})
        case constants.REQUEST_SUCCESS(constants.LOGOUT):
            return { ...state }
        default:
            return state;
    }
}
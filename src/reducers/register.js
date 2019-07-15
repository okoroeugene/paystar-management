import constants from '../constants';

export default function registerReducer(state = {}, action) {
    switch (action.type) {
        case constants.REQUEST(constants.REGISTER):
            return Object.assign({}, state, {
                isProcessing: true,
            })
        case constants.REQUEST_SUCCESS(constants.REGISTER):
            return {
                ...state,
                isProcessing: false,
                created: true
            };
        case constants.REQUEST_FAILURE(constants.REGISTER):
            return Object.assign({}, state, {
                error: `network error: ${action.payload.error}`,
                isProcessing: false
            })
        default:
            return state;
    }
}

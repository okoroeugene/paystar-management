import {
    combineReducers
} from 'redux';
import login from './login';
import register from './register';
import user from './user';

const rootReducers = combineReducers({
    login,
    register,
    user
})

export default rootReducers;
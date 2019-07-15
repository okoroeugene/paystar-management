import * as loginActions from './login';
import * as registerActions from './register';
import * as userActions from './user';

export const doLogin = loginActions.doLogin,
    doRegister = registerActions.doRegister,
    getCurrentUser = userActions.loggedInUser,
    fetchUsers = userActions.fetchUsers,
    logout = userActions.logout
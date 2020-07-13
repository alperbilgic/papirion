// import isEmpty from 'lodash/isEmpty';

// const initialState = {
//     user: {},
//     userToken: '',
// }

// const reducer = (state=initialState, action) => {
//     // if (action.type === 'SAVE_TOKEN') {
//     //     return {
//     //         ...state,
//     //         userToken: action.value,
//     //     } 
//     // } else if (action.type === 'SAVE_USERNAME') {
//     //     return {
//     //         ...state,
//     //         username: action.value,
//     //     }
//     // }

//     // return state;

//     switch(action.type) {
//         case 'SET_CURRENT_USER':
//           return {
//             ...state,
//             userToken: action.token,
//             user: action.user
//           };
//         default: return state;
//     }
// }

// export default reducer;

import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../utility';

const initialState = {
    userToken: null,
    user: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        userToken: action.userToken,
        user: action.user,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { userToken: null, user: null });
};

// const setAuthRedirectPath = (state, action) => {
//     return updateObject(state, { authRedirectPath: action.path })
// }

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;
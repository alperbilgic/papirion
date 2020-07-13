
import axios from 'axios';

import * as actionTypes from  './ActionTypes';
import * as utility from '../utility';


// export function setCurrentUser(user, token) {
//     return {
//       type: actionTypes.SET_CURRENT_USER,
//       user,
//       token
//     };
//   }

// export function login(data) {
//     dispatch(authStart());
        // fetch(`${process.env.REACT_APP_API_URL}/accounts/login/`, {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: authData,
        // }).then( resp => resp.json())
        // .then( res => {
        //     const token = res.token;
        //     localStorage.setItem('userToken', token);
        //     localStorage.setItem('user', res.user);
        //     //   dispatch(setCurrentUser(res.user, token));
        //     dispatch(authSuccess(res.token, res.user));
        //     console.log(res);
        //     console.log('in authactions');
        // })
        // .catch( error => {
        //     dispatch(authFail(error));
        // });
//     }
// }

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userToken: token,
        user: user
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('userToken');
    // localStorage.removeItem('expirationDate');
    localStorage.removeItem('user');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (authData) => {
    return dispatch => {
        dispatch(authStart());
        // const authData = {
        //     email: email,
        //     password: password,
        //     // returnSecureToken: true
        // };
        const headers = {
                            'Content-Type': 'application/json',
                        };
        let url = `${process.env.REACT_APP_API_URL}/accounts/login/`;
        // if (!isSignup) {
        //     url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY';
        // }
        axios.post(url, authData, {headers: headers})
            .then(response => {
                // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('userToken', response.data.token);
                // localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('user', response.data.user);
                dispatch(authSuccess(response.data.token, response.data.user));
                // dispatch(checkAuthTimeout(response.data.expiresIn));
                utility.setAuthorizationToken(response.data.token);
            })
            .catch(err => {
                dispatch(authFail(err));
            });
    };
};

// export const setAuthRedirectPath = (path) => {
//     return {
//         type: actionTypes.SET_AUTH_REDIRECT_PATH,
//         path: path
//     };
// };

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            dispatch(logout());
        // } else {
        //     const expirationDate = new Date(localStorage.getItem('expirationDate'));
        //     if (expirationDate <= new Date()) {
        //         dispatch(logout());
            } else {
                const user = localStorage.getItem('user');
                dispatch(authSuccess(token, user));
                // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        // }
    };
};
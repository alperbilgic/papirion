import axios from 'axios';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const setAuthorizationToken = (token) => {
    if (!token) {
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
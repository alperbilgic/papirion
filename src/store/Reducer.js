const initialState = {
    userToken: '',
    username: '',
}

const reducer = (state=initialState, action) => {
    if (action.type === 'SAVE_TOKEN') {
        return {
            ...state,
            userToken: action.value,
        } 
    } else if (action.type === 'SAVE_USERNAME') {
        return {
            ...state,
            username: action.value,
        }
    }

    return state;
}

export default reducer;
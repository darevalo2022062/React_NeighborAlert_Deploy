const initialState = {
    usersList: [],
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER_REQUEST':
            return { ...state, loading: true };
        case 'ADD_TO_USER_SUCCESS':
            return { ...state, user: action.payload, loading: true };
        case 'ADD_TO_USER_FAILURE':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default userReducer;

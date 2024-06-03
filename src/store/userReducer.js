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
        case 'LOGIN_REQUEST':
            return { ...state, loading: true };
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'LOGIN_FAILURE':
            return { ...state, error: action.payload, loading: false };
        case 'LOGOUT':
            return { ...state, user: null, isAuthenticated: false };
        default:
            return state;
    }
};

export default userReducer;

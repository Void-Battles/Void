const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

let initialState = {
    loggedInStatus: false,
    userData: {}
}

export function logInUser(userData) {
    return {
        type: LOGIN_USER,
        payload: userData
    }
}

export function logOutUser() {
    localStorage.setItem('auth_token', null)
    return {
        type: LOGOUT_USER,
        payload: {}
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, { loggedInStatus: true, userData: action.payload })
        case LOGOUT_USER:
            return Object.assign({}, state, { loggedInStatus: false, userData: action.payload })
        default:
    }
    return state
}

export default reducer





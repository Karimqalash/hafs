export function createSubmitLogin (payload) {
    return {
        type: 'SUBMIT_LOGIN',
        payload
    };
}

export function createSubmitLoginError () {
    return {
        type: 'SUBMIT_LOGIN_ERROR'
    };
}

export function createResetLoginError () {
    return {
        type: 'RESET_LOGIN_ERROR'
    };
}

export function createIsLoggedInSuccess (payload) {
    return {
        type: 'IS_LOGGED_IN_SUCCESS',
        payload
    };
}

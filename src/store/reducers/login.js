// Action type handler object
import checkIsLoggedIn from "../../utils/checkIsLoggedIn";

const HANDLERS = {
	["SUBMIT_LOGIN_ERROR"]: (state) => ({
        ...state,
        error: true
    }),
    ["RESET_LOGIN_ERROR"]: (state) => ({
        ...state,
        error: false
    }),
    ["IS_LOGGED_IN_SUCCESS"]: (state,action) => ({
        ...state,
        error: false,
        isLoggedIn: true,
        isTeacher: action.payload.isTeacher,
        user: action.payload.user,
    }),
}

const INITIAL_STATE = {
    error: false,
    isLoggedIn: false,
    isTeacher: false,
    user: {},
};

export default (state = INITIAL_STATE, action) =>
    HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;


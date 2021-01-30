// Action type handler object
const HANDLERS = {
	["OPEN_TEACHER_SIGNUP_MODEL"]: (state) => ({
        ...state,
        signupModal: {
            isOpen: true,
            isTeacher: true
        }
    }),
    ["OPEN_STUDENT_SIGNUP_MODEL"]: (state) => ({
        ...state,
        signupModal: {
            isOpen: true,
            isTeacher: false
        }
    }),
    ["CLOSE_SIGNUP_MODEL"]: (state) => ({
        ...state,
        signupModal: {
            isOpen: false,
            isTeacher: false
        }
    }),
    ["OPEN_TEACHER_LOGIN_MODEL"]: (state) => ({
        ...state,
        loginModal: {
            isOpen: true,
            isTeacher: true
        }
    }),
    ["OPEN_STUDENT_LOGIN_MODEL"]: (state) => ({
        ...state,
        loginModal: {
            isOpen: true,
            isTeacher: false
        }
    }),
    ["CLOSE_LOGIN_MODEL"]: (state) => ({
        ...state,
        loginModal: {
            isOpen: false,
            isTeacher: false
        }
    }),
}

const INITIAL_STATE = {
    signupModal: {
        isOpen: false,
        isTeacher: false
    },
    loginModal: {
        isOpen: false,
        isTeacher: false
    }
};

export default (state = INITIAL_STATE, action) =>
    HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;


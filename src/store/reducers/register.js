// Action type handler object
const HANDLERS = {
	["SUBMIT_TEACHER_REGISTER_ERROR"]: (state) => ({
        ...state,
        error: true
    }),
    ["RESET_TEACHER_REGISTER_ERROR"]: (state) => ({
        ...state,
        error: false
    }),
}

const INITIAL_STATE = {
    error: false
};

export default (state = INITIAL_STATE, action) =>
    HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;


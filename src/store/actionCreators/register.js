export function createSubmitTeacherRegister (payload) {
    return {
        type: 'SUBMIT_TEACHER_REGISTER',
        payload
    };
}

export function createSubmitTeacherRegisterError () {
    return {
        type: 'SUBMIT_TEACHER_REGISTER_ERROR'
    };
}

export function createResetTeacherRegisterError () {
    return {
        type: 'RESET_TEACHER_REGISTER_ERROR'
    };
}


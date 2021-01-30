// External dependencies
import { connect } from 'react-redux';

import { createSubmitTeacherRegister, createResetTeacherRegisterError } from './../../../store/actionCreators/register';
import { createCloseSignupModel } from './../../../store/actionCreators/modals';

// Transform dispatch to component function props
function mapStateToProps(state) {
	return {
		error: state.register.error,
        signupModal: state.modals.signupModal.isOpen,
		isTeacher: state.modals.signupModal.isTeacher,
	};
}

// Transform dispatch to component function props
function mapDispatchToProps(dispatch) {
	return {
		submitTeacherRegister: user =>
			dispatch(createSubmitTeacherRegister(user)),
		resetTeacherRegisterError: () =>
			dispatch(createResetTeacherRegisterError()),
		closeSignupModal: () => 
			dispatch(createCloseSignupModel()),
	};
}

// Export HOC
export default connect(
	mapStateToProps,
	mapDispatchToProps
);

// External dependencies
import { connect } from 'react-redux';

import { createCloseLoginModel } from './../../../store/actionCreators/modals';
import { createResetLoginError, createSubmitLogin } from '../../../store/actionCreators/login';

// Transform dispatch to component function props
function mapStateToProps(state) {
	return {
		error: state.login.error,
        loginModal: state.modals.loginModal.isOpen,
		isTeacher: state.modals.loginModal.isTeacher,
	};
}

// Transform dispatch to component function props
function mapDispatchToProps(dispatch) {
	return {
		submitLogin: user =>
            dispatch(createSubmitLogin(user)),
        closeLoginModal: () =>
			dispatch(createCloseLoginModel()),
		resetLoginError: () => 
			dispatch(createResetLoginError()),
	};
}

// Export HOC
export default connect(
	mapStateToProps,
	mapDispatchToProps
);

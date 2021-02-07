// External dependencies
import { connect } from 'react-redux';

import { createOpenStudentLoginModel, createOpenStudentSignupModel } from './../../store/actionCreators/modals';

function mapStateToProps(state) {
	return {
		isLoggedIn: state.login.isLoggedIn,
		user: state.login.user,
	};
}

// Transform dispatch to component function props
function mapDispatchToProps(dispatch) {
	return {
		openStudentLoginModal: () =>
            dispatch(createOpenStudentLoginModel()),
        openStudentSignupModal: () =>
			dispatch(createOpenStudentSignupModel()),
	};
}

// Export HOC
export default connect(
	mapStateToProps,
	mapDispatchToProps
);

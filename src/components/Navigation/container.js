// External dependencies
import { connect } from 'react-redux';

import { createOpenStudentLoginModel, createOpenStudentSignupModel } from './../../store/actionCreators/modals';

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
	null,
	mapDispatchToProps
);

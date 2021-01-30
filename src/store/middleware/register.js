import history from './../../routes/history';
import { REGISTRATION_ENDPOINT } from './config';
import apiRequest from './apiRequest';
import { createSubmitTeacherRegisterError } from '../actionCreators/register';
import { createCloseSignupModel } from '../actionCreators/modals';

// Middleware
export default store => next => async action => {
	// Invoke the next in the middleware chain
	next(action);

	// Extract type and payload from redux action
	const { type, payload } = action;

	// If type is "SUBMIT_TEACHER_REGISTER"
	if (type === "SUBMIT_TEACHER_REGISTER") {
        // Invoke an API call with action payload credentials
		const response = await apiRequest({
			url: REGISTRATION_ENDPOINT,
			body: payload,
		});

		if (response.ok) {
			store.dispatch(createCloseSignupModel());
			history.push('/');
		}
		else {
			store.dispatch(createSubmitTeacherRegisterError());
		}
	}

}
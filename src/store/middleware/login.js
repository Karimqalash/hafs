import jwt from "jwt-decode";
import history from './../../routes/history';
import { LOGIN_ENDPOINT } from './config';
import apiRequest from './apiRequest';
import { createIsLoggedInSuccess, createSubmitLoginError } from '../actionCreators/login';
import { createCloseLoginModel } from '../actionCreators/modals';

// Middleware
export default store => next => async action => {
	// Invoke the next in the middleware chain
	next(action);

	// Extract type and payload from redux action
	const { type, payload } = action;

	// If type is "SUBMIT_TEACHER_LOGIN"
	if (type === "SUBMIT_LOGIN") {
        // Invoke an API call with action payload credentials
		const response = await apiRequest({
			url: LOGIN_ENDPOINT,
			body: payload,
		});

		if (response.ok) {
			const res = await response.json();
            localStorage.setItem('access_token', res.access_token);
            store.dispatch(createCloseLoginModel());
            store.dispatch(createIsLoggedInSuccess({
				isTeacher: true,
				user: res.user,
			}));
			history.push('/dashboard');
        }
        else {
            store.dispatch(createSubmitLoginError());
        }
		
    }
}
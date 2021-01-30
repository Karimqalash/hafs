// External dependencies
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

// internal imports
import rootReducer from './reducers';
import Middleware from './middleware';

/**
 * Src/store/index.js
 *
 * Initialise the redux store
 *
 * Will initialise the store with a console logger if the NODE_ENV environment variable is not set to production
 *
 * @example
 * import createStore from 'store';
 *
 * const store = createStore();
 *
 * const RootComponent = () => (
 * 	<Provider store={store}>
 * 		<OtherComponent/>
 * 	</Provider>
 * );
 *
 * @return {Object} Store object to pass to the Provider component
 */

export default function initStore() {
    const logger =
		process.env.NODE_ENV !== 'production' &&
		createLogger({
			collapsed: true,
		});

	const composeEnhancers = // eslint-disable-next-line no-underscore-dangle
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const middleware = [...Middleware, logger].filter(Boolean);

	const initialState = undefined;

	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(...middleware))
	);

	return { store };
}

// External dependencies
import { combineReducers } from 'redux';
import freeSession from './freeSession';
import articles from './articles';
import register from './register'; 
import modals from './modals'; 
import login from './login'; 

export default combineReducers({
    freeSession,
    articles,
    register,
    modals,
    login,
});

import freeSession from './freeSession';
import articles from './articles';
import register from './register';
import login from './login';

// API middleware
export default [
    freeSession,
    articles,
    register,
    login
];
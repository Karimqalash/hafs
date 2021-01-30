// Pull host from env vars set at build time
const HOST = 'http://hafs.finecoding.com';

// Export endpoint constants
export const REGISTRATION_FREE_SESSION_ENDPOINT = `${HOST}/api/free-session/registration`;
export const GET_ARTICLES_ENDPOINT = `${HOST}/api/articles/get-all`;
export const REGISTRATION_ENDPOINT = `${HOST}/api/register`;
export const LOGIN_ENDPOINT = `${HOST}/api/login`;
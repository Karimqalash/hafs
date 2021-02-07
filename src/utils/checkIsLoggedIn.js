export default () => {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ? true:false;
}
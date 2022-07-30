const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.token;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
 
const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getUserEmail,
    getUserToken,
    getIsFetchingCurrent,
}

export default authSelectors;
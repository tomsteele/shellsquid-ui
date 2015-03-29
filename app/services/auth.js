module.exports = function ($http, jwt, MessengerService) {
    return {
        isAuthenticated: isAuthenticated,
        login: login,
        logout: logout
    };

    function isAuthenticated() {
        var token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        try {
            if (jwt.isTokenExpired(token)) {
                return false;
            }
        } catch (e) {
            return false
        }
        return true;
    }

    function login(credentials) {
        return $http.post('/api/token', credentials)
            .then(loginComplete)
            .catch(function () {
                return MessengerService.error('Invalid username or password.');
            });
    }

    function loginComplete(response) {
        return localStorage.setItem('token', response.data.token);
    }

    function logout() {
        return localStorage.setItem('token', null);
    }
};
module.exports = function ($rootScope, $location, AuthService) {
    $rootScope.$on('$routeChangeStart', function (evt, next) {
        if (next.data && next.data.auth) {
            if (!AuthService.isAuthenticated()) {
                evt.preventDefault();
                $location.path('/login');
            }
        }
    });
};
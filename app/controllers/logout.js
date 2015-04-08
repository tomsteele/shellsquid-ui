module.exports = function ($location, AuthService) {
    AuthService.logout();
    $location.path('/login');
};

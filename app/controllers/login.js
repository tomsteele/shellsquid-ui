module.exports = function ($location, AuthService) {
    var vm = this;
    vm.error = false;
    vm.login = login;

    function login(email, password) {
        AuthService.login({
                email: email,
                password: password
            })
            .then(function () {
                return $location.path('/records');
            });
    }
};
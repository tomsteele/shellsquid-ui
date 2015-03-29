module.exports = function ($rootScope, AuthService) {
    var vm = this;
    vm.isAuthenticated = AuthService.isAuthenticated;
    vm.dismiss = dismiss;

    function dismiss() {
        $rootScope.errorMessage = '';
        $rootScope.successMessage = '';
    }
};
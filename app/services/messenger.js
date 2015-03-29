module.exports = function ($rootScope, $timeout, $location) {
    return {
        error: error,
        success: success
    };

    function error(response) {
        if (response.status && response.status === 401) {
            $location.path('/logout');
            return
        }
        if (typeof response === 'string') {
            $rootScope.errorMessage = response;
            return;
        }
        if (response.data.error && typeof response.data.error === 'string') {
            $rootScope.errorMessage = response.data.error;
        } else if (Array.isArray(response.response)) {
            $rootScope.errorMessage = 'Missing one or more required fields.';
        } else {
            $rootScope.errorMessage = 'There was an error during the request.';
        }
    }

    function success(msg) {
        $rootScope.successMessage = msg;
        $timeout(function () {
            $rootScope.successMessage = '';
        }, 2000);
    }
};
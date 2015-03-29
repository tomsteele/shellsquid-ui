module.exports = function ($routeProvider) {
    $routeProvider
        .when('/help', {
            templateUrl: 'views/help.html',
            controller: 'HelpController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/info', {
            templateUrl: 'views/info.html',
            controller: 'InfoController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/records', {
            templateUrl: 'views/records.html',
            controller: 'RecordsController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/records/new', {
            templateUrl: 'views/new_record.html',
            controller: 'NewRecordController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/records/:id', {
            templateUrl: 'views/record.html',
            controller: 'RecordController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UsersController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/users/new', {
            templateUrl: 'views/new_user.html',
            controller: 'NewUserController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/users/:id', {
            templateUrl: 'views/user.html',
            controller: 'UserController',
            controllerAs: 'vm',
            data: {
                auth: true
            }
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            data: {
                auth: false
            }
        })
        .when('/logout', {
            template: '',
            controller: 'LogoutController',
            data: {
                auth: false
            }
        })
        .otherwise({
            redirectTo: '/records'
        });
};
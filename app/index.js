var angular = require('angular');
require('./styles/main.styl');
require('angular-jwt/dist/angular-jwt.js');
require('bootstrap-webpack');

window.marked = require('marked');
window.moment = require('moment');

require('angular-marked/angular-marked.min.js');
require('angular-moment/angular-moment.js');

var router = require('./router');
var run = require('./run');
var controllers = require('./controllers');
var services = require('./services');


var app = angular.module('app', [
    'angular-jwt',
    'hc.marked',
    'angularMoment',
    require('angular-sanitize'),
    require('angular-route'),
    require('angular-resource'),
    require('angular-animate')
]);

app.factory('MessengerService', ['$rootScope', '$timeout', '$location', services.Messenger]);
app.factory('AuthService', ['$http', 'jwtHelper', 'MessengerService', services.Auth]);
app.factory('InfoService', ['$http', 'MessengerService', services.Info]);
app.factory('User', ['$resource', services.User]);
app.factory('Record', ['$resource', services.Record]);


app.controller('ApplicationController', ['$rootScope', 'AuthService', controllers.App]);
app.controller('InfoController', ['InfoService', controllers.Info]);
app.controller('LoginController', ['$location', 'AuthService', controllers.Login]);
app.controller('LogoutController', ['$location', 'AuthService', controllers.Logout]);
app.controller('HelpController', [controllers.Help]);
app.controller('NewRecordController', ['$location', 'Record', 'MessengerService', controllers.Record.Create]);
app.controller('RecordController', ['$location', '$routeParams', 'Record', 'User', 'MessengerService', controllers.Record.Show]);
app.controller('RecordsController', ['Record', 'MessengerService', controllers.Record.Index]);
app.controller('NewUserController', ['$location', 'User', 'MessengerService', controllers.User.Create]);
app.controller('UserController', ['$http', '$routeParams', '$location', 'User', 'Record', 'MessengerService', controllers.User.Show]);
app.controller('UsersController', ['User', 'MessengerService', controllers.User.Index]);


app.config(['$httpProvider', 'jwtInterceptorProvider', function ($httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = function () {
        return localStorage.getItem('token');
    };
    $httpProvider.interceptors.push('jwtInterceptor');
}]);

app.config(['$routeProvider', router]);
app.run(['$rootScope', '$location', 'AuthService', run]);
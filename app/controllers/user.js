module.exports = {
    Create: create,
    Show: show,
    Index: index
};

function create($location, User, MessengerService) {
    var vm = this;
    vm.addUser = addUser;

    function addUser() {
        var user = new User();
        user.email = vm.email;
        user.password = vm.password;
        User.save(user, function () {
            $location.path('/users');
        }, MessengerService.error);
    }
}

function show($http, $routeParams, $location, User, Record, MessengerService) {
    var vm = this;
    vm.user = {};
    vm.records = [];
    vm.changePassword = changePassword;
    vm.deleteUser = deleteUser;

    activate();

    function activate() {
        vm.user = User.get({
            id: $routeParams.id
        }, function () {
            var records = Record.query({}, function () {
                vm.records = records.filter(function (record) {
                    if (record.owner.id === vm.user.id) {
                        return record;
                    }
                }, MessengerService.error);
            });
        });
    }

    function changePassword() {
        if (vm.password !== vm.confirmPassword) {
            MessengerService.error('Passwords did not match.');
            return;
        }
        $http.put('/api/users/' + $routeParams.id, {
            password: vm.password
        }).success(function () {
            MessengerService.success('Password updated.');
            clean();
        }).error(function (data) {
            MessengerService.error(data);
            clean();
        });

        function clean() {
            vm.password = '';
            vm.confirmPassword = '';
        }
    }

    function deleteUser() {
        vm.user.$delete(function () {
            $location.path('/users');
        });
    }
}

function index(User, MessengerService) {
    var vm = this;
    vm.users = [];
    activate();

    function activate() {
        vm.users = User.query({}, function () {}, MessengerService.error);
    }
}

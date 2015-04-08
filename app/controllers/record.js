module.exports = {
    Create: create,
    Show: show,
    Index: index
};

function create($location, Record, MessengerService) {
    var vm = this;
    vm.addRecord = addRecord;

    function addRecord() {
        var record = new Record();
        record.fqdn = vm.fqdn;
        record.handler_host = vm.handler_host;
        record.handler_port = vm.handler_port;
        record.handler_protocol = vm.handler_protocol;
        Record.save(record, function (data) {
            return $location.path('/records/' + data.id);
        }, MessengerService.error);
    }
}

function show($location, $routeParams, Record, User, MessengerService) {
    var vm = this;
    vm.record = {};
    vm.users = [];
    vm.owner = {};

    vm.findOwner = findOwner;
    vm.updateRecord = updateRecord;
    vm.deleteRecord = deleteRecord;
    vm.blacklistRecord = blacklistRecord;
    vm.unblacklistRecord = unblacklistRecord;

    activate();

    function activate() {
        vm.record = Record.get({
            id: $routeParams.id
        }, function () {
            vm.users = User.query({}, function () {
                vm.owner = vm.findOwner();
            });
        });
    }

    function findOwner() {
        for (var i = 0; i < vm.users.length; i++) {
            var user = vm.users[i];
            if (user.id === vm.record.owner.id) {
                return user;
            }
        }
    }

    function updateRecord() {
        for (var i = 0; i < vm.users.length; i++) {
            var user = vm.users[i];
            if (user.email === vm.owner.email) {
                vm.record.owner = user;
                break;
            }
        }
        vm.record.$update(function () {
            MessengerService.success('Record updated.');
        }, MessengerService.error);
    }

    function deleteRecord() {
        vm.record.$delete(function () {
            $location.path('/records');
        });
    }

    function blacklistRecord() {
        vm.record.blacklist = true;
        vm.record.$update(function () {}, function (data) {
            vm.record.blacklist = false;
            MessengerService.error(data);
        });
    }

    function unblacklistRecord() {
        vm.record.blacklist = false;
        vm.record.$update(function () {}, function (data) {
            vm.record.blacklist = true;
            MessengerService.error(data);
        });
    }
}

function index(Record, MessengerService) {
    var vm = this;
    vm.records = [];
    activate();

    function activate() {
        vm.records = Record.query(function () {}, MessengerService.error);
    }
}

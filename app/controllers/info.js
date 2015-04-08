module.exports = function (InfoService) {
    var vm = this;
    vm.info = {};
    activate();

    function activate() {
        return InfoService.getInfo()
            .then(function (data) {
                vm.info = data;
            });
    }
};

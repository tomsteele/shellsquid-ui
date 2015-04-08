var pkg = require('../../package.json');

module.exports = function ($http, MessengerService) {
    return {
        getInfo: getInfo
    };

    function getInfo() {
        return $http.get('/api/info')
            .then(infoComplete)
            .catch(MessengerService.error);
    }

    function infoComplete(response) {
        var info = response.data;
        info.proxy.http.listener = info.proxy.http.listener.replace(':', '');
        info.proxy.ssl.listener = info.proxy.ssl.listener.replace(':', '');
        info.clientVersion = pkg.version;
        return info;
    }
};

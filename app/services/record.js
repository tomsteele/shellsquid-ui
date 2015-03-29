module.exports = function ($resource) {
    return $resource('/api/records/:id', {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
};
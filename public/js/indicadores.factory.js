indicadoresApp.factory('nemotecnicos', function ($http) {

    var urlServidor = 'http://localhost:777/rest';

    var obtenerNemos = function () {
        // Angular $http() and then() both return promises themselves
        return $http({
            method: 'POST',
            url: urlServidor,
            data: { servicio: 'nemotecnicos' }
        }).then(function (result) {
            return result.data;
        });
    };
    return { obtenerNemos: obtenerNemos };
});


angular.module('indicadoresApp').config(['$routeProvider', '$locationProvider', '$httpProvider',
  function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/indicadores', {
        templateUrl: 'views/indicadores.html',
        controller: 'IndicadoresCtrl',
        controllerAs: 'indicadores'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MapasCtrl',
        controllerAs: 'mapas'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}]);

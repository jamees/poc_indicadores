indicadoresApp.controller('IndicadoresCtrl',
  function IndicadoresCtrl($scope, $routeParams, nemotecnicos, myService) {
    this.name = 'IndicadoresCtrl';
    this.params = $routeParams;

    var myDataPromise = myService.getData();
    myDataPromise.then(function(result) {
       $scope.nemos = result;
       console.log($scope.nemos);
    });

    //nemotecnicos.getData();
    nemotecnicos.showConsole();
});

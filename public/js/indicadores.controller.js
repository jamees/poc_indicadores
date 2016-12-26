indicadoresApp.controller('IndicadoresCtrl',
  function IndicadoresCtrl($scope, $routeParams, nemotecnicos, myService) {
    this.name = 'IndicadoresCtrl';
    this.params = $routeParams;


    var myDataPromise = myService.getData();
    myDataPromise.then(function(result) {

       // this is only run after getData() resolves
       $scope.nemos = result;
       console.log($scope.nemos);
    });

    //nemotecnicos.getData();
    nemotecnicos.showConsole();
});

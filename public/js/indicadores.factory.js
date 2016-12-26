indicadoresApp.factory('myService', function($http) {

    var urlServidor = 'http://localhost:777/rest';

    var getData = function() {
        // Angular $http() and then() both return promises themselves
        return $http({  method : 'POST',
          url    : urlServidor,
          data   : {servicio:'nemotecnicos'}}).then(function(result){

            // What we return here is the data that will be accessible
            // to us after the promise resolves
            return result.data;
        });
    };
    return { getData: getData };
});


function myFunction($scope, myService) {
    var myDataPromise = myService.getData();
    myDataPromise.then(function(result) {

       // this is only run after getData() resolves
       $scope.data = result;
       console.log("data.name"+$scope.data.name);
    });
}

indicadoresApp.service('nemotecnicos', function($http){

  var urlServidor = 'http://localhost:3000';


  this.getData = function() {
      // Angular $http() and then() both return promises themselves
      var req = {
          method : 'POST',
          url    : urlServidor,
          data   : {servicio:'nemotecnicos'}
          };

      $http(req).then(function(result){
              console.log("Llamada realizada");
              return result.data;
          });

          // What we return here is the data that will be accessible
          // to us after the promise resolves

      };


  this.obtenerNemos = function (x){
    return $http.post(urlServidor, {servicio:'nemotecnicos'})
        .success(function (data, status, headers, config) {
          return data;
        })
        .error(function (data, status, headers, config) {
          return {"status": false};
        })
        .then(function(response) {
            console.log('promise');
            console.log(response.data.nemos);
            return response.data.nemos;
        });
  }
  this.showConsole = function(){
      console.log("Hice un service con console!");
  }

  getData = function () {
    var promise = $http({method:'GET', url:'getData.php'})
      .success(function (data, status, headers, config) {
        return data;
      })
      .error(function (data, status, headers, config) {
        return {"status": false};
      });

    return promise;
  }
});

indicadoresApp.service('nemotecnicos', function($http){

  var urlServidor = 'http://localhost:777';

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

  
});

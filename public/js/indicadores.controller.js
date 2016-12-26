angular.module('indicadoresApp').controller('IndicadoresCtrl',
  function IndicadoresCtrl($scope, $routeParams, nemotecnicos, socket) {
    this.name = 'IndicadoresCtrl';
    this.params = $routeParams;



    var messages = [];
    var randoms = [];
    var i=0;
    var dataNemos = nemotecnicos.obtenerNemos();

    dataNemos.then(function(result) {
       $scope.nemos = result;
       console.log($scope.nemos);
    });

    //
    socket.on('chat message', function(msg){
        console.log('Recibido:' +msg);
     	  messages.push({"text": msg});
        $scope.messages=messages;
        //Se forza la actualización del front
        $scope.$apply();
    });

    $scope.sendMsg = function () {
        console.log('sending message');
        socket.emit('chat message', $scope.inputMsg + " " +Math.random());
        console.log($scope.messages);
    }

    socket.on('random', function(msg){
     	  randoms.push({"num": msg});
        $scope.randoms=randoms;
        $scope.labels.push(i);
        $scope.data[0].push(msg);
        i++;
        //Se forza la actualización del front
        $scope.$apply();
    });



    $scope.labels = [];
    $scope.data = [[]];
 
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
});

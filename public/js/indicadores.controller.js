indicadoresApp.controller('IndicadoresCtrl',
  function IndicadoresCtrl($scope, $routeParams, nemotecnicos, socket) {
    this.name = 'IndicadoresCtrl';
    this.params = $routeParams;

    var messages = [];

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
});

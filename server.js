//server.js

var express = require('express');
var request = require('request');
var app = express();

//Constantes
var url = 'http://www.banchileinversiones.cl/moviles.rest/servicios/';
var proxy = 'http://proxy2:8080';

// Configuración
app.configure(function() {
    // Localización de los ficheros estaticos
    app.use(express.static(__dirname + '/public'));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
    //Permitir el acceso desde cualquier origen
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
});



// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

//Respuesta REST en raiz para POST
app.post('/rest', function (req, res) {
    console.log("Llamada: " + url + req.body.servicio);
    request.post({'url':url+req.body.servicio,
        'proxy':proxy, form: req.body},
        function (error, response, body) {
                if (!error && response.statusCode == 200) {
                        res.send(body);
                    }
                }
            );

});

// Escucha en el puerto 8080 y corre el server
app.listen(777, function() {
    console.log('App listening on port 777');
});

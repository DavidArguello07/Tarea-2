//npm init
//npm install express --save

var express = require('express');
var cancion = require ("./canciones");
var path = require("path");
var router = express.Router();
var app = express();    


app.listen(3000, function () {
  console.log('App se ejecuta en el puerto 3000!');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/acerca', function(req,res) {
    res.sendFile(path.join(__dirname,'public','mi.html'));
});

app.use("/canciones", cancion);

app.get('/canciones/descarga', function (req, res) {
  var nombrecompleto = req.query.nombre + ' ' + req.query['album'];
  res.download(path.join(__dirname,'public','files','planinformatica.pdf'),'plan.pdf',
  function(err){
      if (err)
          console.log('Ocurrio un error en la descarga.');
      else
          console.log('Descarga exitosa.', nombrecompleto );
  });
});




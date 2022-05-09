//npm init
//npm install express --save

var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, function () {
  console.log('Escuchando en puerto 3000!');
});

///////
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('Pagina principal - GET');
});

///////Siempre se define al final///////
app.use(function(req, res, next) {
  res.status(404).send('Esa pagina no existe!');
});
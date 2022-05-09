var express = require('express');
var router = express.Router();
var path = require("path");

  router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public','rolitas.html'))
  })
    
  router.post('/', function (req, res) {
    res.send('Respuesta a POST');
  })//Post cuando el cliente quiere enviar información al servidor
  
  router.put('/', function (req, res) {
    res.send('Respuesta a PUT');
  })//Put cuando el cliente solicita cambiar un registro en el servidor
  
  router.delete('/', function (req, res) {
    res.send('Respuesta a DELETE');
  })//Put cuando el cliente quiere eliminar un registro en el servidor

  router.get('/descarga', function (req, res) {
    res.download(path.join(__dirname,'public','files','planinformatica.pdf'),'plan.pdf',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});

module.exports = router;
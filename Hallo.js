var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hallo semua");
});

app.listen(3000);